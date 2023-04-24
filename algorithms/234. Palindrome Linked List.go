/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
    palList := []int{head.Val}
    for head.Next != nil{
        head = head.Next
        palList = append(palList, head.Val)
    }
    var isPalindrome bool = true
    for i := 0; i < len(palList) / 2; i++{
        if palList[i] != palList[(len(palList) - 1) - i]{
            isPalindrome = false
            break
        }
    }

    return isPalindrome;
}
