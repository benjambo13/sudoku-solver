# AI Sudoku Solver

My introduction to Web Development in 2018.

At University I was tasked to create an Evolutionary Algorithm to solve sudoku puzzles. This was coded in Python and I recieved a 1st class grade.

In 2018, I started to focus my coding towards web development and decided to port the Python to JavaScript and attach that to an express server to learn the basics of Node.js/express servers. Moreover, I created a UI for users to enter sudoku's they wish to solve. I really enjoyed this project. Its good to look back on and see where my web development journey started.

## Running the Code

In order to run the web application you need both backend and fontend servers running. 

The backend runs on port 9000 and front end 3000.

to start frontend server:
 - cd client
 - npm install
 - npm start

to start backend server:
 - cd api
 - npm install
 - npm start

## Step 1 - Generate the initial population

The initial population, also known as generation 0, is 15000 different random solutions to the proposed sudoku. Each empty square is given a random digit between 1 and 9. The higher the population size the greater the chance of success but, time of execution will also increase.

## Step 2 - Evaulate the fitness of each solution

Each sudoku is given a fitness rating by using a fitness function. The fitness function of the sudoku solver counts how many duplicate numbers there are in each column and subgrid (the rows have the correct amount of each number due to implementation). The lower the count, the fitter the solution is.

## Step 3 - Selecting parents

The next step is to select a portion of the current generation to be parents for the next generation. A total of 1500 parents will be chosen (10 percent), the best 1350 (9 percent) solutions and a further 150 (1 percent) random others (this keeps diversity within the population.). These parents will be bred to create the next generation of solutions.

## Step 4 - Breed new solutions through crossover

Once the parents have been selected they are bred using a function, known as the crossever function. The crossover function selects two parents at random, then takes a random amount of rows from one parent and then the rest from the other, creating a new solution (known as a child). This process is repeated until 15000 children have been created.

## Step 5 - Mutate the offspring solutions

With a new population, each solution has a chance to mutate bewteen 0 and 9 times. A mutation is just the swapping of two digits within the solution

## Step 6 - Repeat steps 3, 4 and 5

This generation is then evaluated and if a solution has not been found (fitness function returning 0), the process repeats back to selecting new parents. The algorithm can get stuck at a local maximum, which is a solution close to being correct, but still has a couple of duplicates. Therefore, a maximum generation of 50 is set and the algorithm restarts from a fresh population when generation 50 is reached.


<img width="1920" alt="image" src="https://github.com/benjambo13/sudoku-solver/assets/47751764/82f44709-4b9c-48e8-b3af-521aca70b1be">
