/// <reference path="_references.js" />

var card = function (name, id)
{
    var self = this;

    self.Name = name;
    self.Id = id;
    self.Url = ko.computed(function () { return "Assets/Cards/" + self.Id;  });

}

function randomCard()
{
    var cards = new Array();
    cards[0] = card("Dog", "dog01.jpg");
    cards[1] = card("Cat", "dog01.jpg");
    cards[2] = card("Cat", "dog01.jpg");
    cards[3] = card("Dog", "dog01.jpg");
    cards[4] = card("Cat", "dog01.jpg");
    cards[5] = card("Dog", "dog01.jpg");
    cards[6] = card("Cat", "dog01.jpg");
    cards[7] = card("Dog", "dog01.jpg");
    cards[8] = card("Dog", "dog01.jpg");
    cards[9] = card("Dog", "dog01.jpg");
    cards[10] = card("Dog", "dog01.jpg");

    var randomnumber = Math.floor(Math.random() * 11)

    return cards[randomnumber];

}

var mainViewModel = function ()
{
    var self = this;

    self.NumberOfCardsList = ko.observableArray([4, 6, 8, 10, 16, 20, 32, 42]);
    self.SelectedNumberOfCards = ko.observable(0);

    self.DisplayNumberSelection = ko.observable(true);
    self.DisplayCards = ko.observable(false);

    self.Cards = ko.observableArray();

    self.SelectNumberCard = function (number)
    {
        self.DisplayNumberSelection(false);
        self.DisplayCards(true);

        self.SelectedNumberOfCards(number);

        for (i = 0; i < number; i++)
        {
            var c1 = randomCard();
            self.Cards.push(c1);
        }
    }


}