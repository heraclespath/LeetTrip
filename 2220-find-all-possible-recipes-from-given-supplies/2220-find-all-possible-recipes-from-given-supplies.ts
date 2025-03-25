function findAllRecipes(
  recipes: string[],
  ingredients: string[][],
  supplies: string[]
): string[] {
  const graph: Record<string, string[]> = {};
  const indegree: Record<string, number> = {};

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ingList = ingredients[i];

    for (const ing of ingList) {
      if (!graph[ing]) graph[ing] = [];
      graph[ing].push(recipe);
    }

    indegree[recipe] = (indegree[recipe] || 0) + ingList.length;
  }

  const queue: string[] = [...supplies];
  const result: string[] = [];

  while (queue.length > 0) {
    const item = queue.shift()!;
    const nextRecipes = graph[item] || [];

    for (const recipe of nextRecipes) {
      indegree[recipe]--;

      if (indegree[recipe] === 0) {
        result.push(recipe);
        queue.push(recipe);
      }
    }
  }

  return result;
}
