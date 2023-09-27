import threading
import random
import time
import multiprocessing
import os

# 检查数字是否合法
def is_valid(board, row, col, num):
    # 检查行是否有重复数字
    for i in range(9):
        if board[row][i] == num:
            return False
    # 检查列是否有重复数字
    for i in range(9):
        if board[i][col] == num:
            return False
    # 检查3x3宫格是否有重复数字
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3
    for i in range(3):
        for j in range(3):
            if board[start_row + i][start_col + j] == num:
                return False
    return True

# 生成数独题目
def generate_sudoku(difficulty = 20):
    # 初始化9x9数独数组
    board = [[0 for _ in range(9)] for _ in range(9)]
    # 使用递归填充数独数组
    def backtrack(row, col):
        if row == 9:
            return True
        if col == 9:
            return backtrack(row + 1, 0)
        # 如果当前位置已经有数字，则跳到下一个位置
        if board[row][col] != 0:
            return backtrack(row, col + 1)
        # 随机生成数字并检查是否合法
        nums = list(range(1, 10))
        random.shuffle(nums)
        for num in nums:
            if is_valid(board, row, col, num):
                board[row][col] = num
                if backtrack(row, col + 1):
                    return True
                board[row][col] = 0
        return False

    backtrack(0, 0)
    #print(board)
    #return board
    #挖空
    blanks = int(difficulty)
    while blanks != 0:
        x = random.randint(0,8)
        y = random.randint(0, 8)
        if board[x][y] != 0:
            board[x][y] = 0
            blanks-=1
            continue
        continue

    temp =''
    for i in range(0,9):
        for j in range(0,9):
            temp = temp + str(board[i][j])

    file_path = './data.txt'
    content = temp
    with open(file_path, 'a') as f:
        f.write(content+'\n')
    #print(temp)
    return temp

def generate9(mode):
    if(os.path.exists('./data.txt')):
        os.remove('./data.txt')
    
    count = 0
    while (count < 9):
        multiprocessing.Process(target=generate_sudoku,args=(mode,)).start()
        count = count + 1
    
    



# # 创建9个子线程并发生成数独题目
# for _ in range(9):
#     thread = threading.Thread(target=generate_sudoku_thread, args=(lock, sudokus))
#     thread.start()
#     threads.append(thread)

# # 等待所有子线程结束
# for thread in threads:
#     thread.join()

# # 打印数独题目
# for i, sudoku in enumerate(sudokus):


#     print(f"Sudoku #{i+1}:")
#     for row in sudoku:
#         print(row)

