/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let start = head;
    let end = head;
    while (start && start.next) {
        start = start.next.next;
        end = end.next;
        if (start === end) {
            return true;
        }
    }
    return false;
};