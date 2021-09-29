// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
  uint storedData;
  uint storedData2;

  function set(uint x) public {
    storedData = x;
  }

  function set2(uint x) public {
    storedData2 = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
  
  function get2() public view returns (uint) {
    return storedData2;
  }

}
