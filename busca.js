//Busca em largura
function bfs(tree, value) {
  var queue = [];

  queue.push(tree[0]);
  while (queue.length !== 0) {
    for (let i = 0; i < queue.length; i++) {
      var node = queue.shift();

      if (node.value === value) {
        return node;
      }
      if (node.left) {
        queue.push(tree[node.left]);
      }
      if (node.right) {
        queue.push(tree[node.right]);
      }
      console.log(node, `nó: ${i}`);
      console.log(queue, `fila: ${i}`);
    }
  }

  return null;
}

//Busca em profundidade
function dfs(tree, value) {
  var stack = [];

  stack.push(tree[0]);

  while (stack.length !== 0) {
    for (let i = 0; i < stack.length; i++) {
      var node = stack.pop();

      if (node.value === value) {
        return node;
      }
      if (node.right) {
        stack.push(tree[node.right]);
      }
      if (node.left) {
        stack.push(tree[node.left]);
      }
      console.log(node, `nó: ${i}`);
      console.log(stack, `pilha: ${i}`);
    }
  }
  return null;
}
