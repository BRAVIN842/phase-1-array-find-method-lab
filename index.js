function superbowlWin(superbowlRecords) {
    const winningRecord = superbowlRecords.find(record => record.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  