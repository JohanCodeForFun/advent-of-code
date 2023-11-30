// problem from 2022, day 1
use std::fs;
use std::fs::read_to_string;

fn main() {
    let input = include_str!("input1.txt");
    let output = part1(input);
    dbg!(output);

    println!("{}", input)
}

fn part1(input: &str) -> String {
    input.to_string()
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        let result = part1("000");
        assert_eq!(result, 24000.to_string());
    }
}