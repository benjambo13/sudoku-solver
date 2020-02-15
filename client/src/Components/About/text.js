const intro = `The AI Sudoku Solver is created using the two JavaScript libraries, React.js and Node.js, for the front-end and back-end respectively. The application solves 
sudokus using artificial intelligence, more specifically, an evolutionary algorithm. These algorithms are based on the main evolutionary theory of Charles Darwin - the
existence of a population of individuals exposed to environmental pressure, which leads to natural selection. How this theory can be applied to solving sudokus is explained 
below.`

const initialization = `The initial population, also known as generation 0, is 15000 different random solutions to the proposed sudoku. Each empty square is given a random
digit between 1 and 9. The higher the population size the greater the chance of success but, time of execution will also increase.`

const evaluation = `Each sudoku is given a fitness rating by using a fitness function. The fitness function of the sudoku solver counts how many duplicate numbers there
are in each column and subgrid (the rows have the correct amount of each number due to implementation). The lower the count, the fitter the solution is.`

const selection = `The next step is to select a portion of the current generation to be parents for the next generation. A total of 1500 parents will be chosen (10 
percent), the best 1350 (9 percent) solutions and a further 150 (1 percent) random others (this keeps diversity within the population.). These parents will be bred to 
create the next generation of solutions.`

const crossover = `Once the parents have been selected they are bred using a function, known as the crossever function. The crossover function selects two parents at random,
then takes a random amount of rows from one parent and then the rest from the other, creating a new solution (known as a child). This process is repeated until 15000 
children have been created.`

const mutation = `With a new population, each solution has a chance to mutate bewteen 0 and 9 times. A mutation is just the swapping of two digits within the solution`

const repeat = `This generation is then evaluated and if a solution has not been found (fitness function returning 0), the process repeats back to selecting new parents.
The algorithm can get stuck at a local maximum, which is a solution close to being correct, but still has a couple of duplicates. Therefore, a maximum generation of
50 is set and the algorithm restarts from a fresh population when generation 50 is reached.`

export default [intro, initialization, evaluation, selection, crossover, mutation, repeat]
