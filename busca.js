//Busca em largura
function bfs(tree, start, destiny) {
  var queue = [],
    viewed = [],
    current;

  queue.push(start);

  while (queue.length > 0) {
    current = queue.shift();
    viewed.push(current);

    for (var i = 0; i < tree.length; i++) {
      if (tree[current][i] == 1) {
        if (i == destiny) {
          viewed.push(i);

          return {
            viewed: viewed,
            start: start,
            destiny: destiny,
          };
        } else {
          if (!viewed.contains(i)) if (!queue.contains(i)) queue.push(i);
        }
      }
    }
  }
}

//Busca em profundidade
function dfs(tree, start, destiny) {
  var stack = [],
    viewed = [],
    current;

  stack.push(start);

  while (stack.length > 0) {
    current = stack[stack.length - 1];
    viewed.push(current);
    var foundNodes = false;

    for (var i = 0; i < tree.length; i++) {
      if (tree[current][i] == 1) {
        if (i == destiny) {
          viewed.push(i);

          return {
            viewed: viewed,
            start: start,
            destiny: destiny,
          };
        } else {
          if (!viewed.contains(i)) {
            if (!stack.contains(i)) {
              foundNodes = true;

              stack.push(i);
              break;
            }
          }
        }
      }
    }

    if (!foundNodes) stack.pop();
  }
}
