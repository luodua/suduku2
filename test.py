import unittest
import solve

class TestSudoku(unittest.TestCase):
    def test_solve_sudoku(self):
        board = "001342960706819532920056408160080290378291004492635870537908146010563709689074320"
        expected_solution = "851342967746819532923756418165487293378291654492635871537928146214563789689174325"
        self.assertEqual(solve.solve_sudoku(board), expected_solution)

    def test_check(self):

        board = "150936024790854603634020895871092306023467189046183057315048002407209530289370060"
        solution = "158936724792854613634721895871592346523467189946183257315648972467219538289375461"
        self.assertEqual(solve.check(board, solution), "0")

        wrong_solution = "158936524792854613634721895871592346523467189946183257315648972467219538289375461"
        self.assertEqual(solve.check(board, wrong_solution), "1")


if __name__ == '__main__':
    unittest.main()