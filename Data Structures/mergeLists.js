// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    if(!head1) return head2;
    if(!head2) return head1;
    
    var nodeA = head1
    var nodeB = head2
    
    let main = new SinglyLinkedListNode(null)
    let ll = main
    console.log(main)
    while(nodeA || nodeB){
        if(!nodeA){
            ll.next = nodeB
            break
        }
        if(!nodeB){
            ll.next = nodeA
            break
        }
        if(nodeA.data < nodeB.data){
            ll.next = nodeA
            nodeA = nodeA.next
        } else {
            ll.next = nodeB
            nodeB = nodeB.next
        }
        ll = ll.next
    }
    return main.next
}
