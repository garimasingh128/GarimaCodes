---
title: 'What is Gradient Descent Algorithm and its working.'
date: 2020-07-15 16:21:13
category: 'development'
draft: false
---
**Title:** What is Gradient Descent Algorithm and its working.

Gradient descent is a type of machine learning algorithm that helps us in optimizing neural networks and many other algorithms. This article ventures into how this algorithm actually works, its types and its significance in the real world.

## A Brief Introduction

Gradient descent is one of the most popular algorithms to perform optimization and by far the most common way to optimize neural networks. At the same time, every state-of-the-art Deep Learning library contains implementations of various algorithms to optimize gradient descent (e.g. lasagne's, caffe's, and keras' documentation).

The reason we're talking about it here is not merely theoretical. Gradient Descent algorithm is much more than it seems to be. It is used time and again by ML practitioners, Data scientists and students to optimize their models. 

Gradient descent is a way to minimize an objective function parameterized by a model's parameters by updating the parameters in the opposite direction of the gradient of the objective function w.r.t. to the parameters. The learning rate $alpha$ determines the size of the steps we take to reach a (local) minimum. In other words, we follow the direction of the slope of the surface created by the objective function downhill until we reach a valley.

Now that you've gotten a basic insight of the algorithm, let's dig deep in it in this post. We will define and cover some important aspects like its working, it's working examples, types and a final conclusion to mould it all.

![https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80](https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)

## What is exactly Gradient Descent ?

*Answer the question posed by the title of this post directly below this header. This will increase your chances of ranking for the featured snippet on Google for this phrase and provide readers with an immediate answer. Keep the length of this definition – at least in this very basic introduction – between 50 and 60 words.*

*After the brief definition, dive further into the concept and add more context and explanation if needed.*

Gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).

Gradient descent is best used when the parameters cannot be calculated analytically (e.g. using linear algebra) and must be searched for by an optimization algorithm.

**Gradient descent** is a [first-order](https://en.wikipedia.org/wiki/Category:First_order_methods) [iterative](https://en.wikipedia.org/wiki/Iterative_algorithm) [optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) [algorithm](https://en.wikipedia.org/wiki/Algorithm) for finding a [local minimum](https://en.wikipedia.org/wiki/Local_minimum) of a differentiable function. To find a local minimum of a function using gradient descent, we take steps proportional to the negative of the [gradient](https://en.wikipedia.org/wiki/Gradient) (or approximate gradient) of the function at the current point. But if we instead take steps proportional to the positive of the gradient, we approach a [local maximum](https://en.wikipedia.org/wiki/Local_maximum) of that function; the procedure is then known as **gradient ascent**. Gradient descent was originally proposed by [Cauchy](https://en.wikipedia.org/wiki/Augustin-Louis_Cauchy) in 1847.

Gradient descent is also known as **steepest descent**; but gradient descent should not be confused with the [method of steepest descent](https://en.wikipedia.org/wiki/Method_of_steepest_descent) for approximating integrals.

## Okay but why is it Important?

*Provide your readers with a few reasons why they should care about the term or the concept you’re writing about. If this is a consumer-level concept, talk about the implications this could have on their businesses, finances, personal happiness, etc. If you’re writing for an audience of professionals, mention the impact this term or concept has on profit, efficiency, and/or customer satisfaction. To make the most of this section, make sure it includes at least one statistic, quote, or outside reference.*

***Include at Least One of These Next Three Sections***

## Gradient descent variants

There are three variants of gradient descent, which differ in how much data we use to compute the gradient of the objective function. Depending on the amount of data, we make a trade-off between the accuracy of the parameter update and the time it takes to perform an update.

1. **Batch Gradient Descent:** This is a type of gradient descent which processes all the training examples for each iteration of gradient descent. But if the number of training examples is large, then batch gradient descent is computationally very expensive. Hence if the number of training examples is large, then batch gradient descent is not preferred. Instead, we prefer to use stochastic gradient descent or mini-batch gradient descent.
2. **Stochastic Gradient Descent:** This is a type of gradient descent which processes 1 training example per iteration. Hence, the parameters are being updated even after one iteration in which only a single example has been processed. Hence this is quite faster than batch gradient descent. But again, when the number of training examples is large, even then it processes only one example which can be additional overhead for the system as the number of iterations will be quite large.
3. **Mini Batch gradient descent:** This is a type of gradient descent which works faster than both batch gradient descent and stochastic gradient descent. Here *b* examples where *b<m* are processed per iteration. So even if the number of training examples is large, it is processed in batches of b training examples in one go. Thus, it works for larger training examples and that too with lesser number of iterations.

## Gradient Descent Procedure

The procedure starts off with initial values for the coefficient or coefficients for the function. These could be 0.0 or a small random value.

coefficient = 0.0

The cost of the coefficients is evaluated by plugging them into the function and calculating the cost.

cost = f(coefficient)

or

cost = evaluate(f(coefficient))

The derivative of the cost is calculated. The derivative is a concept from calculus and refers to the slope of the function at a given point. We need to know the slope so that we know the direction (sign) to move the coefficient values in order to get a lower cost on the next iteration.

delta = derivative(cost)

Now that we know from the derivative which direction is downhill, we can now update the coefficient values. A [learning rate parameter](https://machinelearningmastery.com/learning-rate-for-deep-learning-neural-networks/) (alpha) must be specified that controls how much the coefficients can change on each update.

coefficient = coefficient – (alpha * delta)

This process is repeated until the cost of the coefficients (cost) is 0.0 or close enough to zero to be good enough.

You can see how simple gradient descent is. It does require you to know the gradient of your cost function or the function you are optimizing, but besides that, it’s very straightforward. Next we will see the math behind it and how we can use this in machine learning algorithms.

![https://images.unsplash.com/photo-1557562645-4eee56b29bc1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ](https://images.unsplash.com/photo-1557562645-4eee56b29bc1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ)

## Math Behind it

Suppose we have the following given:

Hypothesis: hθ(x)= θ^Tx=θ0x0+θ1x1+...............+θnxn

Parameters: θ0, θ1, θ2,........,θn

Cost function: J(θ)=J(θ0, θ1, θ2,........,θn)

Consider the gradient descent algorithm, which starts with some initial θ, and repeatedly performs the update:

θj := θj − α ∂/∂θj (J(θ))

(This update is simultaneously performed for all values of j = 0,...,n.)
Here, α is called the learning rate. This is a very natural algorithm that
repeatedly takes a step in the direction of steepest decrease of J.

We’d derived the LMS rule for when there was only a single training
example. There are two ways to modify this method for a training set of
more than one example. The first is replace it with the following algorithm:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97dab81d-cbc0-45bc-ba4f-3635de05cb2f/Screenshot_(453).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97dab81d-cbc0-45bc-ba4f-3635de05cb2f/Screenshot_(453).png)

The reader can easily verify that the quantity in the summation in the update rule above is just ∂J(θ)/∂θj (for the original definition of J). So, this is simply gradient descent on the original cost function J. This method looks at every example in the entire training set on every step, and is called batch gradient descent. Note that, while gradient descent can be susceptible to local minima in general, the optimization problem we have posed here for linear regression has only one global, and no other local, optima; thus gradient descent always converges (assuming the learning rate α is not too large) to the global minimum. Indeed, J is a convex quadratic function.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c5035cb-7697-47ce-ba30-47218924e782/InkedScreenshot_(459)_LI.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c5035cb-7697-47ce-ba30-47218924e782/InkedScreenshot_(459)_LI.jpg)

## How to Calculate Gradient Descent

***Note: This section only applies for posts about math and equations**.*

*Provide a step-by-step explanation and example of how to calculate the rate, point, or number you’re providing a definition for.*

**Variables used:**Let m be the number of training examples.Let n be the number of features.

**Note:** if b == m, then mini batch gradient descent will behave similarly to batch gradient descent.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/accafd4a-ab7a-4199-b4aa-07a1184ae6c9/Screenshot_(458)_LI.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/accafd4a-ab7a-4199-b4aa-07a1184ae6c9/Screenshot_(458)_LI.jpg)

**Algorithm for batch gradient descent :**Let hθ(x) be the hypothesis for linear regression. Then, the cost function is given by:Let Σ represents the sum of all training examples from i=1 to m.

```
Jtrain(θ) = (1/2m) Σ( hθ(x(i))  - y(i))2

Repeat {
 θj = θj – (learning rate/m) * Σ( hθ(x(i))  - y(i))xj(i)
    For every j =0 …n 
}
```

Where xj(i) Represents the jth feature of the ith training example. So if *m* is very large(e.g. 5 million training samples), then it takes hours or even days to converge to the global minimum.That’s why for large datasets, it is not recommended to use batch gradient descent as it slows down the learning.

**Algorithm for stochastic gradient descent:**

In this algorithm, we repeatedly run through the training set, and each time
we encounter a training example, we update the parameters according to
the gradient of the error with respect to that single training example only.
This algorithm is called stochastic gradient descent (also incremental
gradient descent).

1) Randomly shuffle the data set so that the parameters can be trained evenly for each type of data.2) As mentioned above, it takes into consideration one example per iteration.

```
Hence,
Let (x(i),y(i)) be the training example
Cost(θ, (x(i),y(i))) = (1/2) Σ( hθ(x(i))  - y(i))2

Jtrain(θ) = (1/m) Σ Cost(θ, (x(i),y(i)))

Repeat {

For i=1 to m{

         θj = θj – (learning rate) * Σ( hθ(x(i))  - y(i))xj(i)
        For every j =0 …n

                } 
}
```

**Algorithm for mini batch gradient descent:**Say b be the no of examples in one batch, where b < m.Assume b = 10, m = 100;

**Note:** However we can adjust the batch size. It is generally kept as power of 2. The reason behind it is because some hardware such as GPUs achieve better run time with common batch sizes such as power of 2.

```
Repeat {
 For i=1,11, 21,…..,91

    Let Σ be the summation from i to i+9 represented by k. 

    θj = θj – (learning rate/size of (b) ) * Σ( hθ(x(k))  - y(k))xj(k)
        For every j =0 …n

}
```

## Choosing the best α

- For sufficiently small α , J(θ) should decrease on every iteration.
- But if α is too small, gradient descent can be slow to converge.
- If α is too large, J(θ) may not decrease on every iteration, may not converge.

To choose α, try .....,0.001,0.01,0.1,1,....... etc.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76e4816b-60bd-4af4-9fb1-844068eca544/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76e4816b-60bd-4af4-9fb1-844068eca544/Untitled.png)

## Batch vs Stochastic gradient algorithm

Batch gradient descent has to scan through the entire training set before taking a single step—a costly operation if m is large—stochastic gradient descent can start making progress right away, and continues to make progress with each example it looks at. Often, stochastic gradient descent gets θ “close” to the minimum much faster than batch gradient descent. (Note however that it may never “converge” to the minimum, and the parameters θ will keep oscillating around the minimum of J(θ); but in practice most of the values near the minimum will be reasonably good approximations to the true minimum.) For these reasons, particularly when the training set is large, stochastic gradient descent is often preferred over batch gradient descent.

![https://images.unsplash.com/photo-1583109193439-1ebb113bceac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ](https://images.unsplash.com/photo-1583109193439-1ebb113bceac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ)

## Some real life examples and intuition

*If you feel like it would benefit your readers, list a few examples of the concept you’re explaining in action. You can elevate this section by embedding images, videos, and/or social media posts.*

*Remember, this post is **not** a list post – so try to keep this list between three and five examples if you do decide to include it.*

- Think of a large bowl like what you would eat cereal out of or store fruit in. This bowl is a plot of the cost function (f). A random position on the surface of the bowl is the cost of the current values of the coefficients (cost). The bottom of the bowl is the cost of the best set of coefficients, the minimum of the function. The goal is to continue to try different values for the coefficients, evaluate their cost and select new coefficients that have a slightly better (lower) cost. Repeating this process enough times will lead to the bottom of the bowl and you will know the values of the coefficients that result in the minimum cost.
- The basic intuition behind gradient descent can be illustrated by a hypothetical scenario. A person is stuck in the mountains and is trying to get down (i.e. trying to find the global minimum). There is heavy fog such that visibility is extremely low. Therefore, the path down the mountain is not visible, so they must use local information to find the minimum. They can use the method of gradient descent, which involves looking at the steepness of the hill at their current position, then proceeding in the direction with the steepest descent (i.e. downhill). If they were trying to find the top of the mountain (i.e. the maximum), then they would proceed in the direction of steepest ascent (i.e. uphill). Using this method, they would eventually find their way down the mountain or possibly get stuck in some hole (i.e. local minimum or [saddle point](https://en.wikipedia.org/wiki/Saddle_point)), like a mountain lake. However, assume also that the steepness of the hill is not immediately obvious with simple observation, but rather it requires a sophisticated instrument to measure, which the person happens to have at the moment. It takes quite some time to measure the steepness of the hill with the instrument, thus they should minimize their use of the instrument if they wanted to get down the mountain before sunset. The difficulty then is choosing the frequency at which they should measure the steepness of the hill so not to go off track. In this analogy, the person represents the algorithm, and the path taken down the mountain represents the sequence of parameter settings that the algorithm will explore. The steepness of the hill represents the [slope](https://en.wikipedia.org/wiki/Slope) of the error surface at that point. The instrument used to measure steepness is [differentiation](https://en.wikipedia.org/wiki/Differentiation_(mathematics)) (the slope of the error surface can be calculated by taking the [derivative](https://en.wikipedia.org/wiki/Derivative) of the squared error function at that point). The direction they choose to travel in aligns with the [gradient](https://en.wikipedia.org/wiki/Gradient) of the error surface at that point. The amount of time they travel before taking another measurement is the learning rate of the algorithm.

## Tips and Reminders before practicing it

*When breaking down a difficult concept or definition, some readers may still feel overwhelmed and unsure of their ability to address it. Break down a few best practices on how to approach the concept, and/or a few reminders about it. Again, this is not a list post, so keep this short list to three to five pieces of advice.*

This section lists some tips and tricks for getting the most out of the gradient descent algorithm for machine learning.

- **Plot Cost versus Time**: Collect and plot the cost values calculated by the algorithm each iteration. The expectation for a well performing gradient descent run is a decrease in cost each iteration. If it does not decrease, try reducing your learning rate.
- **Learning Rate**: The learning rate value is a small real value such as 0.1, 0.001 or 0.0001. Try different values for your problem and see which works best.
- **Rescale Inputs**: The algorithm will reach the minimum cost faster if the shape of the cost function is not skewed and distorted. You can achieved this by rescaling all of the input variables (X) to the same range, such as [0, 1] or [-1, 1].
- **Few Passes**: Stochastic gradient descent often does not need more than 1-to-10 passes through the training dataset to converge on good or good enough coefficients.
- **Plot Mean Cost**: The updates for each training data set instance can result in a noisy plot of cost over time when using stochastic gradient descent. Taking the average over 10, 100, or 1000 updates can give you a better idea of the learning trend for the algorithm.

**Convergence trends in different variants of Gradient Descents:**

In case of Batch Gradient Descent, the algorithm follows a straight path towards the minimum. If the cost function is convex, then it converges to a global minimum and if the cost function is not convex, then it converges to a local minimum. Here the learning rate is typically held constant.

In case of stochastic gradient Descent and mini-batch gradient descent, the algorithm does not converge but keeps on fluctuating around the global minimum. Therefore in order to make it converge, we have to slowly change the learning rate. However the convergence of Stochastic gradient descent is much noisier as in one iteration, it processes only one training example.

![https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ](https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ)

## Closing and a final conclusion

*Wrap up your amazing new blog post with a great closing. Remind your readers of the key takeaway you want them to walk away with and consider pointing them to other resources you have on your website.*

In this post you discovered gradient descent for machine learning. You learned that:

- Optimization is a big part of machine learning.
- Gradient descent is a simple optimization procedure that you can use with many machine learning algorithms.
- Batch gradient descent refers to calculating the derivative from all training data before calculating an update.
- Stochastic gradient descent refers to calculating the derivative from each training data instance and calculating the update immediately.

Do you have any questions about gradient descent for machine learning or this post? Leave a comment and ask your question and I will do my best to answer it.

## Sources for the above article / Call-to-Action

*Last but not least, place a call-to-action at the bottom of your blog post. This should be to a lead-generating piece of content or to a sales-focused landing page for a demo or consultation.*

[Introduction to Gradient Descent Algorithm (along with variants) in Machine Learning](https://www.analyticsvidhya.com/blog/2017/03/introduction-to-gradient-descent-algorithm-along-its-variants/)

[Gradient Descent For Machine Learning - Machine Learning Mastery](https://machinelearningmastery.com/gradient-descent-for-machine-learning/)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbc3675e-cd85-46ca-9d4e-a60c8a996598/gfg.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbc3675e-cd85-46ca-9d4e-a60c8a996598/gfg.png)
