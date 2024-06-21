package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"regexp"
	"strconv"
)

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	concatenatedNumbers := []string{}
	result := 0

	scanner := bufio.NewScanner(file)
	numberRegex := regexp.MustCompile(`\d+`)

	for scanner.Scan() {
		line := scanner.Text()
		numbers := numberRegex.FindAllString(line, -1)
		if len(numbers) > 0 {
			firstNumber := numbers[0]
			lastNumber := numbers[len(numbers)-1]

			firstDigitOfFirstNumber := string(firstNumber[0])
			lastDigitOfLastNumber := string(lastNumber[len(lastNumber)-1])

			concatenated := firstDigitOfFirstNumber + lastDigitOfLastNumber
			concatenatedNumbers = append(concatenatedNumbers, concatenated)
		}
	}

	for _, cn := range concatenatedNumbers {
		cnInt, err := strconv.Atoi(cn)
		if err != nil {
			log.Fatal(err)
		}

		result += cnInt
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	fmt.Println(result)
}
