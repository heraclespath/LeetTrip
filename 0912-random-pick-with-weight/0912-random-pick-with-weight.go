type Solution struct {
    prefix []int
    total int
}


func Constructor(w []int) Solution {
    prefix := make([]int, len(w))
    prefix[0] = w[0]
    for i:= 1; i < len(w); i++ {
        prefix[i] = prefix[i-1] + w[i]
    }

    return Solution{prefix: prefix, total: prefix[len(prefix)-1]}
}


func (this *Solution) PickIndex() int {
    r := rand.Intn(this.total) + 1

    left, right := 0, len(this.prefix)-1
    for left < right {
        mid := left + (right-left)/2
        if this.prefix[mid] < r {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}


/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(w);
 * param_1 := obj.PickIndex();
 */