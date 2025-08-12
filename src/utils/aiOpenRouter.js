export const aiOpenRouter = async (board) => {
  console.log(
    `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`
  );
  const systemPrompt = `You are a Tic Tac Toe bot. Your task is to play Tic Tac Toe against a human player. The board is represented as a 1D array of 9 elements, where each element can be 'X', 'O', or null. Your goal is to make the best move possible based on the current state of the board.`;

  const userPrompt = `Current board state: ${board.join(
    ", "
  )}. What is your next move?`;

  // Function to get the AI's move from OpenRouter
  const getMoveFromClaude = async () => {
    // Make a POST request to OpenRouter API
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          authorization: `Bearer `,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1",
          temperature: 0.2,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        }),
      }
    );
    console.log(response);

    const data = await response.json(); // Parse the JSON response
    console.log(data);

    const text = data.choices[0].message.content; // Extract the text response
    console.log(text);

    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : null; // Extract the first number from the response
  };
  //
  try {
    let move = await getMoveFromClaude();
    return move;
  } catch (error) {
    console.error("Error fetching move from Claude:", error);
  }
};
