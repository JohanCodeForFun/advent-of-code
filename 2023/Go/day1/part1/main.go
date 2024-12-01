package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"regexp"
	"strconv"
)

var numberMap = map[string]string{
	"zero":  "0",
	"one":   "1",
	"two":   "2",
	"three": "3",
	"four":  "4",
	"give":  "5",
	"six":   "6",
	"seven": "7",
	"eight": "8",
	"nine":  "9",
}

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	concatenatedNumbers := []string{}
	result := 0

	scanner := bufio.NewScanner(file)
	numberRegex := regexp.MustCompile(`\d+|\b(zero|one|two|three|four|five|six|seven|eight|nine)\b`)

	for scanner.Scan() {
		line := scanner.Text()
		matches := numberRegex.FindAllString(line, -1)
		numbers := make([]string, len(matches))
		for i, match := range matches {
			if num, ok := numberMap[match]; ok {
				numbers[i] = num
			} else {
				numbers[i] = num
			}
		}

		if len(numbers) > 0 {
			firstNumber := numbers[0]
			lastNumber := numbers[len(numbers)-1]

			firstDigitOfFirstNumber := string(firstNumber[0])
			lastDigitOfLastNumber := string(lastNumber[len(lastNumber)-1])
			fmt.Println(firstDigitOfFirstNumber, lastDigitOfLastNumber)

			concatenated := firstDigitOfFirstNumber + lastDigitOfLastNumber
			concatenatedNumbers = append(concatenatedNumbers, concatenated)
		}
	}

	for _, cn := range concatenatedNumbers {
		fmt.Println(cn)
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
