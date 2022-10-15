// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    
    let comparison = 1;
    while(llist1.next){
        if(llist1.data !== llist2.data){
            comparison = 0;
        }
        if(!llist2.next){
            return 0;
        }
        llist2 = llist2.next;
        llist1 = llist1.next;
    }
    return comparison;
}
