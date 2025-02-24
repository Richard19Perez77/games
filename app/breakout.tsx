import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  View,
  Dimensions,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
  SafeAreaView,
} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { styles } from "../styles/breakout/breakoutstyles";

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PADDLE_HEIGHT = 20;
export const PADDLE_BORDER = 2;

interface Vector {
  x: number;
  y: number;
}

interface BallBody {
  position: Vector;
  velocity: Vector;
}

interface PaddleBody {
  position: Vector;
}

interface BallEntity {
  body: BallBody;
  size: number;
  screenWidth: number;
  screenHeight: number;
  renderer: React.ComponentType<BallProps>;
}

interface PaddleEntity {
  body: PaddleBody;
  size: { width: number; height: number };
  renderer: React.ComponentType<PaddleProps>;
}

interface Entities {
  ball: BallEntity;
  paddle: PaddleEntity;
}

interface PhysicsArgs {
  time: { delta: number };
}

const Physics = (entities: Entities, { time }: PhysicsArgs): Entities => {
  const ball = entities.ball;
  // Update ball's position using its velocity and the time delta
  ball.body.position.x += ball.body.velocity.x * time.delta;
  ball.body.position.y += ball.body.velocity.y * time.delta;

  // Bounce off left/right walls
  if (ball.body.position.x <= 0 || ball.body.position.x + ball.size >= ball.screenWidth) {
    ball.body.velocity.x = -ball.body.velocity.x;
  }
  // Bounce off the top wall
  if (ball.body.position.y <= 0) {
    ball.body.velocity.y = -ball.body.velocity.y;
  }
  // Reset the ball if it falls below the screen
  if (ball.body.position.y >= ball.screenHeight) {
    ball.body.position = { x: ball.screenWidth / 2, y: ball.screenHeight / 2 };
  }

  return entities;
};

interface BallProps {
  body: BallBody;
  size: number;
}

const Ball: React.FC<BallProps> = ({ body, size }) => (
  <View
    style={[
      styles.ball,
      {
        width: size,
        height: size,
        left: body.position.x,
        top: body.position.y,
      },
    ]}
  />
);

interface PaddleProps {
  body: PaddleBody;
  size: { width: number; height: number };
}

const Paddle: React.FC<PaddleProps> = ({ body, size }) => {
  console.log('Paddle Position:', body.position);
  return (
    <View
      style={[
        styles.paddle,
        {
          width: size.width,
          height: size.height,
          left: body.position.x,
          top: body.position.y,
        },
      ]}
    />
  );
};

const BreakoutGame: React.FC = () => {
  // Use container height from layout
  const [containerHeight, setContainerHeight] = useState<number>(Dimensions.get('window').height);
  const gameEngineRef = useRef<GameEngine>(null);

  // For debugging, we override the paddle's Y position to a fixed value.
  const createEntities = useCallback((): Entities => ({
    ball: {
      body: {
        position: { x: SCREEN_WIDTH / 2, y: containerHeight / 2 },
        velocity: { x: 0.2, y: -0.2 },
      },
      size: 20,
      screenWidth: SCREEN_WIDTH,
      screenHeight: containerHeight,
      renderer: Ball,
    },
    paddle: {
      body: {
        // For testing, position paddle at a fixed Y (DEBUG_PADDLE_Y)
        position: { x: SCREEN_WIDTH / 2 - 50, y: containerHeight - PADDLE_HEIGHT - PADDLE_BORDER },
      },
      size: { width: 100, height: PADDLE_HEIGHT },
      renderer: Paddle,
    },
  }), [containerHeight]);

  const entitiesRef = useRef<Entities>(createEntities());

  useEffect(() => {
    entitiesRef.current = createEntities();
    if (gameEngineRef.current) {
      (gameEngineRef.current as any).swap(entitiesRef.current);
    }
  }, [containerHeight, createEntities]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        entitiesRef.current.paddle.body.position.x =
          gestureState.moveX - entitiesRef.current.paddle.size.width / 2;
        if (gameEngineRef.current) {
          (gameEngineRef.current as any).swap(entitiesRef.current);
        }
      },
    })
  ).current;

  return (
    <SafeAreaView
      style={styles.safeArea}
      onLayout={(e) => {
        const { height } = e.nativeEvent.layout;
        setContainerHeight(height);
      }}
    >
      <View style={styles.container} {...panResponder.panHandlers}>
        <GameEngine
          ref={gameEngineRef}
          systems={[Physics]}
          entities={entitiesRef.current}
          style={[styles.gameEngine, { width: SCREEN_WIDTH }]}
        />
      </View>
    </SafeAreaView>
  );
};

export default BreakoutGame;
