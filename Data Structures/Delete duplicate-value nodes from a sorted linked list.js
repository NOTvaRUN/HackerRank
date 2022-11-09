/*
 * Complete the 'removeDuplicates' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function removeDuplicates(llist) {
    // Write your code here
    if(!llist){
        return llist
    }
    let newList = new SinglyLinkedListNode(llist.data)
    let body = newList;
    let currVal = llist.data;
    while(llist){
        if(llist.data !== currVal){
            body.next = new SinglyLinkedListNode(llist.data)
            body = body.next;
            currVal = llist.data                    
        }
        llist = llist.next
        
    }
    return newList
}
