pragma solidity ^0.4.2;

/*
 * Rejector
 * Base contract for rejecting direct deposits.
 * Fallback function throws immediately.
 */
contract Rejector {
  function() { throw; }
}
