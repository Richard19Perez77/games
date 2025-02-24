export interface StoryPage {
  id: string;
  text: string;
  choices: { text: string; nextId: string }[];
}

export const skylineData = `import java.util.*

fun getSkyline(buildings: Array<IntArray>): List<List<Int>> {
    // Stores (x, height), height is negative
    // for entering, positive for leaving
    val events = mutableListOf<Pair<Int, Int>>()  
    
    buildings.forEach { (left, right, height) ->
        // Start of a building (negative height for max-heap)
        events.add(left to -height)  
        // End of a building (positive height to remove)
        events.add(right to height)  
    }

    // Sort by x, then height (entry before exit)
    events.sortWith(compareBy({ it.first }, { it.second })) 

    val result = mutableListOf<List<Int>>()
    // Max heap
    val heights = PriorityQueue<Int>(compareByDescending { it }) 
    // Ground level
    heights.add(0)  

    var prevHeight = 0

    for ((x, h) in events) {
        if (h < 0) {
            // Entering a building
            heights.add(-h)  
        } else {
            // Leaving a building
            heights.remove(h)  
        }

        val currHeight = heights.peek() ?: 0
        if (currHeight != prevHeight) {
            result.add(listOf(x, currHeight))
            prevHeight = currHeight
        }
    }

    return result
}`;
