# a self play version of 20 quetsions with gpt playing against itself
from langchain.llms import OpenAI
# from langchain.chat_models import ChatOpenAI
llm = OpenAI(model_name="gpt-3.5-turbo-0301")

# an oracle
def get_oracle(concept):
    def give_answer(question):
        prompt = f"For a {concept}, \
        {question}. Answer with a single word [YES, NO]"
        # curtail the response to only 10 characters to prevent blabbling the answer back
        return llm(prompt).strip()[:10]
    return give_answer

# the guesser
class Guesser:
    def __init__(self):
        self.past_observations = []
    def ask_question(self):
        prompt = f"We are playing 20 questions! You are playing as the role of a guesser\
        here are what you already know about the object {self.past_observations} \
        give a short question to ask next.\
        the question must be binary that can be answered with Yes or No"
        return llm(prompt).strip()

    def add_observation(self,observation):
        self.past_observations.append(observation)

def play_game(concept,n_rounds, to_print=False):
    oracle = get_oracle(concept)
    guesser = Guesser()
    for i in range(n_rounds):
        question = guesser.ask_question()
        if to_print:
            print ("\n question : ", question)
        answer = oracle(question)
        if to_print:
            print ("\n answer : ", answer)
        guesser.add_observation((question, answer))
        if concept in question.lower():
            print ("=== game successfully ended ! ===")
            break
    return guesser.past_observations
    # print(guesser.past_observations)

if __name__ == '__main__':
    history = play_game("fish", 21)
    print (history)
