# Javascript Sleep Sort

An implementation of Sleep Sort, inspired by https://kevlinhenney.medium.com/need-something-sorted-sleep-on-it-11fdf8453914

This algorithm sorts a list of positive integers. For each value, it sleeps for 100ms * value, then appends the value to a shared array. 
Eventually, this puts the values into the shared array in order. 

Clearly, not a useful way of sorting. But it is a really neat idea and a goood excuse to play with promises and async/await to get an implementation
that I prefer to the one in the article. Suggestions for improvements are welcome!
