function makeSuggestions(groups) {
  /**
   * groups = [
   *   {
   *     day: 2,
   *     start: 9,
   *     end: 18,
   *     state: 1,
   *   },
   *   ...
   * ]
   * where valid states are
   *   0: unavailable
   *   1: available
   *   2: uncertain
   * **The input array must be guaranteed to be consecutive in timeline**
   */
  const suggestions = [];
  let largeGroup;
  groups.forEach((group) => {
    // Count groups of 1 (available)
    if (group.state === 1) {
      suggestions.push(group);
    }
    // Count groups of 1 + 2
    if (group.state > 0) {
      if (largeGroup === undefined) {
        // Initialise largeGroup
        largeGroup = {
          day: group.day,
          start: group.start,
          end: group.end,
          state: group.state,
        };
      } else {
        // Update largeGroup
        largeGroup.end = group.end;
        // To avoid counting state 1 group again
        largeGroup.state *= group.state;
      }
    } else if (largeGroup !== undefined) {
      if (largeGroup.state > 1) {
        // End of a potential large group
        largeGroup.state = 2;
        suggestions.push(largeGroup);
      }
      largeGroup = undefined;
    }
  });
  // Push the last large group
  if (largeGroup !== undefined) {
    if (largeGroup.state > 1) {
      largeGroup.state = 2;
      suggestions.push(largeGroup);
    }
  }
  // Sort suggestions
  // Sort by state first
  // Same state, sort by length (from large to small)
  suggestions.sort((a, b) => {
    if (a.state < b.state) {
      return -1;
    }
    if (a.state === b.state) {
      return (b.end - b.start) - (a.end - a.start);
    }
    return 1;
  });
  return suggestions;
}

export default makeSuggestions;
