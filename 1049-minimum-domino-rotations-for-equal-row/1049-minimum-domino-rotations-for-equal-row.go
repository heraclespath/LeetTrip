func minDominoRotations(tops []int, bottoms []int) int {
    try := func(target int) int {
        rotationsTop, rotationsBottom := 0, 0
        for i := 0; i < len(tops); i++ {
            if tops[i] != target && bottoms[i] != target {
                return -1
            } else if tops[i] != target {
                rotationsTop++
            } else if bottoms[i] != target {
                rotationsBottom++
            }
        }
        return min(rotationsTop, rotationsBottom)
    }

    res := try(tops[0])
    if res != -1 {
        return res
    }
    return try(bottoms[0])
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}