import threading
import generate
import multiprocessing

def print_board(board):
    for row in board:
        print(row)
    print("\n")


def get_input_sudoku():
    sudoku = []
    for i in range(9):
        row = list(map(int, input().split()))
        sudoku.append(row)
    return sudoku


def get_unsolved():
    all = []
    f = open('data.txt', 'r')
    for i in range(0, 9):
        line = f.readline()
        line = list(line)
        if '\n' in line:
            line.remove('\n')
        for index in range(0, 81):
            line[index] = int(line[index])

        board = [[0 for _ in range(9)] for _ in range(9)]
        count = 0
        for row in range(0, 9):
            for col in range(0, 9):
                board[row][col] = line[count]
                count += 1
        all.append(board)
    return all

file_path = './result.txt'
def solve_sudoku(board):
    generate.backtrack(board,0,0)
    temp = ''
    for i in range(0, 9):
        for j in range(0, 9):
            temp = temp + str(board[i][j])
    temp = temp + '\n'

    content = temp
    with open(file_path, 'a') as f:
        f.write(content)
        f.close()

# if __name__ == "__main__":
    # initial_state = get_input_sudoku()
    # if generate.backtrack(initial_state,0,0):
    #     print("Solved:")
    #     print_board(initial_state)
    # else:
    #     print("No solution.")


def check(before,after):
    before_str = before + '\n'
    after_str = after + '\n'
    with open('data.txt', 'r') as file:
        lines = file.readlines()
        for i, line in enumerate(lines):
            if before_str == line:
                index =i
                break
    with open('result.txt', 'r') as file:
        lines = file.readlines()
        for i, line in enumerate(lines):
            if i == index:
                answer = line   #answer带有'\n'
                break
    flag = 0
    for i in range(len(answer)):
        if after_str[i] != '0' and after_str[i] != answer[i]:
            print("WRONG\n")
            flag = 1
            break
    if flag == 0:
        print("TRUE\n")
    return str(flag)





def generate9(mode):
#清空data.txt
    with open("data.txt", "w+") as file:
        file.truncate()

#    choice = int(input())
# generate.py生成数独题目
#    if choice == 0:
    for i in range(9):
        # p = multiprocessing.Process(target=generate.generate_sudoku(), args=(mode,))
        # p.start()
        thread = threading.Thread(target=generate.generate_sudoku(mode))
        thread.start()

# #用户自己输入题目
#     elif choice == 1:
#         for i in range(9):
#             print('请输入题目：')
#             sudoku = [[-1 for _ in range(9)] for _ in range(9)]
#             sudoku = get_input_sudoku()
#             s = ''
#             for row in range(0, 9):
#                 for col in range(0, 9):
#                     s = s + str(sudoku[row][col])
#             s = s + '\n'
#             with open('data.txt', 'a') as f:
#                 f.write(s)
#                 f.close()
def solve9():
    all = get_unsolved()
    with open('result.txt', 'w+') as fp:
        fp.truncate()
    for each in all:
        # process = multiprocessing.Process(target = solve_sudoku(each))
        # process.start()
        thread = threading.Thread(target = solve_sudoku(each))
        thread.start()


