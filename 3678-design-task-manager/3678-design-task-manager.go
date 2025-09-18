import (
	"github.com/emirpasic/gods/trees/redblacktree"
)

type TaskManager struct {
	d  map[int][2]int
	st *redblacktree.Tree
}

func encode(priority, taskId int) int {
	return (priority << 32) | taskId
}

func comparator(a, b interface{}) int {
    ai := a.(int)
    bi := b.(int)
	if ai > bi {
		return -1
	} else if ai < bi {
		return 1
	}
	return 0
}

func Constructor(tasks [][]int) TaskManager {
	tm := TaskManager{
		d:  make(map[int][2]int),
		st: redblacktree.NewWith(comparator),
	}
	for _, task := range tasks {
		tm.Add(task[0], task[1], task[2])
	}
	return tm
}

func (this *TaskManager) Add(userId int, taskId int, priority int) {
	this.d[taskId] = [2]int{userId, priority}
	this.st.Put(encode(priority, taskId), taskId)
}

func (this *TaskManager) Edit(taskId int, newPriority int) {
	if e, ok := this.d[taskId]; ok {
		priority := e[1]
		this.st.Remove(encode(priority, taskId))
		this.d[taskId] = [2]int{e[0], newPriority}
		this.st.Put(encode(newPriority, taskId), taskId)
	}
}

func (this *TaskManager) Rmv(taskId int) {
	if e, ok := this.d[taskId]; ok {
		priority := e[1]
		delete(this.d, taskId)
		this.st.Remove(encode(priority, taskId))
	}
}

func (this *TaskManager) ExecTop() int {
	if this.st.Empty() {
		return -1
	}
	it := this.st.Iterator()
	it.Next()
	taskId := it.Value().(int)
	if e, ok := this.d[taskId]; ok {
		delete(this.d, taskId)
		this.st.Remove(it.Key())
		return e[0]
	}
	return -1
}

/**
 * Your TaskManager object will be instantiated and called as such:
 * obj := Constructor(tasks);
 * obj.Add(userId,taskId,priority);
 * obj.Edit(taskId,newPriority);
 * obj.Rmv(taskId);
 * param_4 := obj.ExecTop();
 */