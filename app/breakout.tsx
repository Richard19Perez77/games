import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

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

// Change the renderer type to React.ComponentType so that it accepts the component class itself
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
  // Update ball position based on velocity and time delta
  ball.body.position.x += ball.body.velocity.x * time.delta;
  ball.body.position.y += ball.body.velocity.y * time.delta;

  // Bounce off the left and right walls
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
    // Optionally, adjust velocity for a new serve
  }

  // Additional collision logic (e.g., with the paddle) would go here

  return entities;
};

interface BallProps {
  body: BallBody;
  size: number;
}

class Ball extends PureComponent<BallProps> {
  render() {
    const { body, size } = this.props;
    return (
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
  }
}

interface PaddleProps {
  body: PaddleBody;
  size: { width: number; height: number };
}

class Paddle extends PureComponent<PaddleProps> {
  render() {
    const { body, size } = this.props;
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
  }
}

export default class BreakoutGame extends PureComponent {
  render() {
    const ball: BallEntity = {
      body: {
        position: { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 },
        velocity: { x: 0.2, y: -0.2 },
      },
      size: 20,
      screenWidth: SCREEN_WIDTH,
      screenHeight: SCREEN_HEIGHT,
      renderer: Ball, // Pass the component type, not an element instance
    };

    const paddle: PaddleEntity = {
      body: {
        position: { x: SCREEN_WIDTH / 2 - 50, y: SCREEN_HEIGHT - 30 },
      },
      size: { width: 100, height: 20 },
      renderer: Paddle, // Pass the component type here as well
    };

    const entities: Entities = {
      ball,
      paddle,
    };

    return (
      <GameEngine
        systems={[Physics]}
        entities={entities}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  ball: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  paddle: {
    position: 'absolute',
    backgroundColor: 'blue',
  },
});
