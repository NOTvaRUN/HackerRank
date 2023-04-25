type SmallestInfiniteSet struct {
    array []bool
}


func Constructor() SmallestInfiniteSet {
    small := SmallestInfiniteSet{array: make([]bool, 1001)}
    for ind := range small.array {
        small.array[ind] = true
    }
    return small
}


func (this *SmallestInfiniteSet) PopSmallest() int {
    for ind, val := range this.array {
        if ind > 0 && val != false {
            fmt.Println(ind, val)
            this.array[ind] = false
            return ind
        }
    }
    return 0
}


func (this *SmallestInfiniteSet) AddBack(num int)  {
    fmt.Println("addback", num)
    this.array[num] = true
}


/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.PopSmallest();
 * obj.AddBack(num);
 */
