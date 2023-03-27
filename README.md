# 20Q-selfplay
LLM play 20questions with itself. Browse the dataset here : https://evanthebouncy.github.io/20Q-selfplay/ 

Tested on 1823 hypotheses from the THINGS dataset, llm = OpenAI(model_name="gpt-3.5-turbo-0301"), score of 68 / 1823.

![alt text](https://raw.githubusercontent.com/evanthebouncy/20Q-selfplay/main/summary_20Q.png)

Original 1854 objects de-duplicated: bat(animal) and bat(sport tool) collapsed into 1 concept.

## Read the blog for full details: 

https://evanthebouncy.medium.com/llm-self-play-on-20-questions-dee7a8c63377

20Questions is also explored in BIG-bench (albeit with only 40 objects):

https://github.com/google/BIG-bench/tree/main/bigbench/benchmark_tasks/twenty_questions 

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=evanthebouncy)](https://twitter.com/evanthebouncy)

2023-03-27
