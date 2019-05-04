import pandas as pd
import json

################################


def murderRateState():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse("Sheet1")
    statesDict = dict()

    allStates = df["State"]
    for key in allStates:
        if key in statesDict:
            statesDict[key] += 1
        else:
            s = {key: 1}
            statesDict.update(s)

    # print(statesDict)
    file = open("MurderRateState.js", "w+")
    file.write(json.dumps(freq))
    file.close()

################################


def murderRateDec():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    # df['Decade'] = (df['Year'] // 10) * 10
    # decade = df['Decade']
    # decade = df.Decade.unique()
    year = df['Year']
    state = df['State']
    freq = dict()

    for i in range(0, len(df)):
        currYear = year.iloc[i]
        if(currYear >= 1980 and currYear < 1989):
            currDecade = 1980
        elif(currYear >= 1990 and currYear < 2000):
            currDecade = 1990
        elif(currYear >= 2000 and currYear < 2010):
            currDecade = 2000
        elif(currYear >= 2010):
            currDecade = 2010
        currState = state.iloc[i]
        if currDecade in freq:
            if currState in freq[currDecade]:
                freq[currDecade][currState] += 1
            else:
                key = {currState: 1}
                freq[currDecade].update(key)
        else:
            key = {currDecade: {currState: 1}}
            freq.update(key)

    # print(freq)

    file = open("MurderRateDecState.js", "w+")
    file.write(json.dumps(freq))
    file.close()

    # ONE METHOD
    #counts = df.groupby(['State', 'Decade']).count()
    #counts = counts.reset_index()[['State', 'Decade','Victim Count']]

    # ANOTHER METHOD
    # counts = df.loc[:,['Decade', 'State','Victim Count']].groupby(['Decade', 'State']).count()
    # all_murders = counts.to_dict()
    # print(all_murders)


################################

def weaponRelationship():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    relationship = df['Relationship']
    weapon = df['Weapon']
    freq = dict()

    for i in range(0, len(df)):
        currRelationship = relationship.iloc[i]
        currWeapon = weapon.iloc[i]
        if currRelationship in freq:
            if currWeapon in freq[currRelationship]:
                freq[currRelationship][currWeapon] += 1
            else:
                key = {currWeapon: 1}
                freq[currRelationship].update(key)
        else:
            key = {currRelationship: {currWeapon: 1}}
            freq.update(key)

    # print(freq)

    file = open("WeaponRelationship.js", "w+")
    file.write(json.dumps(freq))
    file.close()

    # ONE METHOD
    #counts = df.groupby(['Weapon', 'Relationship']).count()
    #counts = counts.reset_index()[['Weapon', 'Relationship','Victim Count']]

    # ANOTHER METHOD
    #counts = df.loc[:,['Weapon', 'Relationship','Victim Count']].groupby(['Weapon', 'Relationship']).count()
    #all_weapons = counts.to_dict()

################################


def raceWeapon():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    race = df['Perpetrator Race']
    weapon = df['Weapon']
    freq = dict()

    for i in range(0, len(df)):
        currRace = race.iloc[i]
        currWeapon = weapon.iloc[i]
        if currRace in freq:
            if currWeapon in freq[currRace]:
                freq[currRace][currWeapon] += 1
            else:
                key = {currWeapon: 1}
                freq[currRace].update(key)
        else:
            key = {currRace: {currWeapon: 1}}
            freq.update(key)

    # print(freq)

    file = open("RaceWeapon.js", "w+")
    file.write(json.dumps(freq))
    file.close()

################################


def murderAge():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    age = df['Perpetrator Age']
    freq = dict()

    for key in age:
        if key in freq:
            freq[key] += 1
        else:
            s = {key: 1}
            freq.update(s)

    # print(freq)

    file = open("MurderAge.js", "w+")
    file.write(json.dumps(freq))
    file.close()

################################


def murderAgeState():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    age = df['Perpetrator Age']
    state = df['State']
    freq = dict()

    for i in range(0, len(df)):
        currState = state.iloc[i]
        currAge = age.iloc[i]
        if currState in freq:
            if currAge in freq[currState]:
                freq[currState][currAge] += 1
            else:
                key = {currAge: 1}
                freq[currState].update(key)
        else:
            key = {currState: {currAge: 1}}
            freq.update(key)

    # print(freq)

    file = open("MurderAgeState.js", "w+")
    file.write(json.dumps(freq))
    file.close()

################################


def cityWeapons():
    df = pd.ExcelFile('Murders.xlsx').parse('Sheet1')
    stateDf = df['State']
    cityDf = df['City']
    weaponDf = df['Weapon']
    data = dict()

    for x in range(0, len(df)):
        currState = stateDf.iloc[x]
        currCity = cityDf.iloc[x]
        currWeapon = weaponDf.iloc[x]
        if currState in data:
            if currCity in data[currState]:
                if currWeapon in data[currState][currCity]:
                    data[currState][currCity][currWeapon] += 1
                else:
                    s = {currWeapon: 1}
                    data[currState][currCity].update(s)
            else:
                s = {currCity: {currWeapon: 1}}
                data[currState].update(s)
        else:
            s = {currState: {currCity: {currWeapon: 1}}}
            data.update(s)

    f = open("CityWeapons.js", "w+")
    f.write(json.dumps(data))
    f.close()

    print("done writing file\n")

#################################PERPETRATOR SEX#############################


def perpSex():
    x1 = pd.ExcelFile('Murders.xlsx')
    df = x1.parse("Sheet1")

    perpSexDict = dict()

    allPerp = df["Perpetrator Sex"]
    for key in allPerp:
        if key in perpSexDict:
            perpSexDict[key] += 1

        else:
            s = {key: 1}
            perpSexDict.update(s)
    # print(perpSexDict)
    file = open("PerpSex.js", "w+")
    file.write(json.dumps(freq))
    file.close()


##############################PERPETRATOR RACE##############################

def perpRace():
    x1 = pd.ExcelFile('Murders.xlsx')
    df = x1.parse("Sheet1")

    perpRaceDict = dict()

    allPerp = df["Perpetrator Race"]
    for key in allPerp:
        if key in perpRaceDict:
            perpRaceDict[key] += 1

        else:
            s = {key: 1}
            perpRaceDict.update(s)
    # print(perpRaceDict)
        file = open("PerpRace.js", "w+")
        file.write(json.dumps(freq))
        file.close()


##############################VICTIM SEX##############################

def victSex():
    x1 = pd.ExcelFile('Murders.xlsx')
    df = x1.parse("Sheet1")

    victSexDict = dict()

    allVicts = df["Victim Sex"]
    for key in allVicts:
        if key in victSexDict:
            victSexDict[key] += 1

        else:
            s = {key: 1}
            victSexDict.update(s)
    # print(victSexDict)
        file = open("VictSex.js", "w+")
        file.write(json.dumps(freq))
        file.close()

##############################VICTIM RACE##############################


def victRace():
    x1 = pd.ExcelFile('Murders.xlsx')
    df = x1.parse("Sheet1")

    victRaceDict = dict()

    allVicts = df["Victim Race"]
    for key in allVicts:
        if key in victRaceDict:
            victRaceDict[key] += 1

        else:
            s = {key: 1}
            victRaceDict.update(s)
    # print(victRaceDict)
    file = open("VictRace.js", "w+")
    file.write(json.dumps(freq))
    file.close()

####################################AGENCY NAME IS EACH STATE########################


def stateAgen():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    yrDf = df['State']
    stateDf = df['Agency Name']
    yrStateDict = dict()

    for x in range(0, len(df)):
        currYear = yrDf.iloc[x]
        currState = stateDf.iloc[x]
        if currYear in yrStateDict:
            if currState in yrStateDict[currYear]:
                yrStateDict[currYear][currState] += 1
            else:
                s = {currState: 1}
                yrStateDict[currYear].update(s)
        else:
            s = {currYear: {currState: 1}}
            yrStateDict.update(s)

    # print(yrStateDict)
    file = open("StateAgen.js", "w+")
    file.write(json.dumps(freq))
    file.close()


#########################################Weapon Used Based on Perpetrator Sex############################################

def weaponPerpSex():
    xl = pd.ExcelFile('Murders.xlsx')
    df = xl.parse('Sheet1')
    yrDf = df['Weapon']
    stateDf = df['Perpetrator Sex']
    yrStateDict = dict()

    for x in range(0, len(df)):
        currYear = yrDf.iloc[x]
        currState = stateDf.iloc[x]
        if currYear in yrStateDict:
            if currState in yrStateDict[currYear]:
                yrStateDict[currYear][currState] += 1
            else:
                s = {currState: 1}
                yrStateDict[currYear].update(s)
        else:
            s = {currYear: {currState: 1}}
            yrStateDict.update(s)

    # print(yrStateDict)
    # print(counts)
    file = open("WeaponPerpSex.js", "w+")
    file.write(json.dumps(freq))
    file.close()


#######################################How many crimes happen per month#################################################################


def crimesMonth():
    x1 = pd.ExcelFile('Murders.xlsx')
    df = x1.parse("Sheet1")

    monthDict = dict()

    allMonth = df["Month"]
    for key in allMonth:
        if key in monthDict:
            monthDict[key] += 1

        else:
            s = {key: 1}
            monthDict.update(s)
    file = open("CrimesMonth.js", "w+")
    file.write(json.dumps(freq))
    file.close()

######################################################################################################


# murderRateDec()
# yearMurders()
# weaponRelationship()
# raceWeapon()
# murderAge()
murderAgeState()
