import csv

concepts = []
# open the file 'things.csv' in read mode
with open('things.csv', 'r') as csv_file:
    # create a csv reader object
    csv_reader = csv.reader(csv_file)

    # iterate over each row in the csv file
    for line in csv_reader:
        # print the row
        concept = line[1]
        # get what ever is before '(' symbol
        concept = concept.split('(')[0]
        concepts.append(concept)

if __name__ == '__main__':
    from Play20Q import *
    num_correct = 0
    # get the json import in here
    import json
    to_json = {}
    hypotheses = concepts[1:]
    for i, h in enumerate(hypotheses):
        result = play_game(h, 21)
        print (h, len(result))
        if len(result) < 21:
            num_correct += 1
        to_json[h] = result
        if i % 10 == 0:
            print ("wrote to file")
            # write to json file
            with open('batch_20Q.json', 'w') as fp:
                json.dump(to_json, fp)
            # print the fraction correct
            print (num_correct / (i+1), num_correct, i+1)



