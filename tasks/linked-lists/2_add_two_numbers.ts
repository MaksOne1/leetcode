 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode()
    let tail = head;
    let temp = 0;

    while (l1 || l2 || temp) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + temp

        tail.next = new ListNode(sum % 10)
        tail = tail.next

        temp = Math.floor(sum / 10)

        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }

    return head.next
};