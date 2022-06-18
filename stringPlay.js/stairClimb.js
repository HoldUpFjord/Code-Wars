function stairsIn20(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
  }