function Question({ question, children }) {
    return (
      <div className="mb-10 animatex">
        <h3 className="flex items-center mb-4 text-xl font-black text-color font-mono">
        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
            {question}
        </h3>
        {children}
      </div>
    );
}

function Faq () {
    return (
        <>
        <section className="bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold  text-color">Frequently asked questions</h2>
        <div className="grid pt-8 text-left border-t md:gap-16 border-gray-700 md:grid-cols-2">
            <div>
                <Question question={"What is a hackathon?"}>
                        <p className="text-color font-mono">A hackathon is an event where several teams compete to make the best project possibe pertaining to a specific theme, in a limited time window. For this hackathon specifically, the theme is the Gapminder Ignorance Project and the time window is one week. Projects will be gaded on how creative the idea is along with how well it has been implimented.</p>
                </Question>
                <Question question={"What is the ignorance project?"}>
                        <p className="text-color font-mono">The Ignorance Project was started by the Gapminder foundation in order to raise awareness about he amount of progress we have made on global problems. The premise is that, without people knowing about the amount of progress we have made on these problems, they will be under the assumption that these problems are impossible to solve. Such a public sentiment will decrease funding for projects aiming to solve these problems. This will then make the problem harder to solve that further reinforces the belief that this problem cannot be solved.</p>
                        <p className="text-color font-mono">For more information, click <a href="https://gapminder.org/ignorance" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline text-blue-500 hover:text-blue-700" target="_blank" rel="noreferrer">here</a>.</p>
                </Question>
                <Question question={"Why should I participate?"}>
                        <p className="text-color font-mono">Even if you believe there is no chance of you winning, there is still plenty of reasons to participate. Participating in a hackathon is a very unique experience. The amount you learn in those 7 days is unmatched by any courses you could do or independant projects you can make. Participating in a hackathon is just a different experience. Not only that, but hackathons are also very fun.</p>
                </Question>
          </div>
          <div>
              <Question question={"What if I'm not good at coding?"}>
                    <p className="text-color font-mono">You don't need to be good at coding to participate. While coding skills definitely do help, skills like graphic design can also be a huge asset to the team.</p>
              </Question>
              <Question question={"Which programming language will we be using?"}>
                    <p className="text-color font-mono">You can use any programming language that you are comfortable with. Even Scratch works. As long as you build an app that solves the problem, it is fine. It is more about the idea and the implimentation than the code itself.</p>
              </Question>
              <Question question={"What exactly are we supposed to build?"}>
                <p className="text-color font-mono">While you won't be told exactly what you are supposed to build, you do get to know what problem you need to solve. Your goal is to come up with an innovative solution to this problem. You won't be told what that solution should be. It is less about coding, more about the idea and the implimentation.</p>
              </Question>
              <Question question={"Will we be working with others on our project?"}>
                <p className="text-color font-mono">Yes, you will be working with others on your project. You cannot work on a project individually.</p>
              </Question>
          </div>
      </div>
  </div>
    </section>
        </>
    );
}
export default Faq;