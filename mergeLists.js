function mergeLists(head1, head2) {
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    let dummy = new SinglyLinkedListNode(0); 
    let tail = dummy;

    let a = head1;
    let b = head2;

    while (a !== null && b !== null) {
        if (a.data <= b.data) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }

    if (a !== null) tail.next = a;
    if (b !== null) tail.next = b;

    return dummy.next; 
}
