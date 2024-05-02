const express = require("express");
const cors = require("cors")
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path')
app.use(express.json());
app.use(cors())
const configuration = new Configuration({
  apiKey: "sk-proj-84hcWh3WS9KI5rLKJh6uT3BlbkFJLucRsQVWsWCEAKxzbX6Q",
});
const openai = new OpenAIApi(configuration);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})


app.post("/chat", async (req, res) => {
  const { text } = req.body;
  try {

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: `UNK Stands for University of Nebraska At Kearney.

            Founding years: 1903-1905
            March 1903: The Nebraska Legislature appropriated $50,000 to build a normal school in western Nebraska, touching off a heated competition among several communities bidding to be selected. On September 1, 1903, after 111 ballots, the State Board of Education awarded the school to Kearney for its offer of 20 acres and the Green Terrace apartments for a dormitory.
            1905: A.O. Thomas, then superintendent of Kearney Public Schools, was named the normal school’s first president and the inaugural classes were held that summer in Longfellow High School and Whittier Elementary. One week into the fall semester, September 25, classes moved from KPS to the campus Administration building though it featured only temporary stairs, lacked window glass, and required steam engines to deliver heat until the heating plant was completed.
            The first decades: 1900s-1920s
            “Normal Schools” were devoted to teacher preparation and students could enter after completing 8th grade. In addition to studying math, sciences and history the curriculum included art, language and literature, drama and music, domestic science and woodworking and agriculture. Among many clubs, Recreation Club and Agriculture Club were the most popular. During WWI, enrollment dropped from 451 (1915) to 305 (1918).
            1921: The name change reflected a truly significant shift to granting four-year baccalaureate degrees in the liberal arts for teachers. Case Hall (1930) was the first residence hall constructed, with room and board costing $6.50 per week, and the first hall for men, Men’s Hall, opened in 1939. The college celebrated is Golden Anniversary June 15, 1955, attended by members of the first graduating class (1906) and enrollment reached 2,000 in 1961.
            Kearney State College: 1963-1991
            1963: More than a mere name change, the naming of Kearney State College signified that the institution had become more than a teacher education institution, and that Kearney had a mission unique from the other three former Teachers Colleges. In 1970, the number of faculty swelled to 274 and student enrollment increased to 5,870, requiring construction of the Centennial Towers in 1965 and 1967. For a time, students referred to the college as Nebraska State, using a large “N” on uniforms and cheerleading outfits.
            1989: The Nebraska legislature passed a bill moving KSC to the University of Nebraska system. This law was then challenged and reviewed by the Nebraska Supreme Court, and affirmed.
            The name change was far from cosmetic and required numerous transformations from reorganizing separate schools into colleges and to revision of institutional, faculty and staff constitutions and bylaws to increased admissions standards among many others. After an initial period of transition, the campus has achieved increasing distinction in academic, scholarly and creative activity, campus renewal and construction, and student success.
            Names for UNK since 1903
            1903: “Normal schools” in the early 1900s referred to schools training high school graduates to become teachers: Nebraska State Normal School at Kearney.
            1921-1962: the college was Nebraska State Teachers College at Kearney.
            1963-1990: Kearney State College, part of the Nebraska state college system.
            1989: The Nebraska legislature passed a bill moving KSC to the University of Nebraska system. This law was challenged and reviewed by the Nebraska Supreme Court, and affirmed.
            1991: University of Nebraska at Kearney becomes official on July 1, 1991.
            Succession of Leadership
            
            9- Douglas A. Kristensen, Chancellor
             University of Nebraska at Kearney
            2002 – present
            8- Gladys Styles Johnston, Chancellor
            University of Nebraska at Kearney
            1993 – 2002
            7- William R. Nester, President/Chancellor
            Kearney State College/University of Nebraska at Kearney
            1983 - 1993
            6- Brendan J. McDonald, President
            Kearney State College
            1972 – 1982
            5- Milton J. Hassel, President
            Kearney State College
            1961 – 1971
            4- Herbert L. Cushing, President
            Nebraska State Teacher's College
            1936 – 1961
            3- George Martin, President
            Nebraska State Normal School / Nebraska State Teacher's College
            1919 – 1936
            2- George S. Dick, President
            Nebraska State Normal School
            1914 – 1919
            1- A.O. Thomas, President
            Nebraska State Normal School
            1905 – 1913
            
            
            UNK Resources are: MyBlue, Canvas, IT Services, Firefly, HelpDesk, Work for UNK, Library, Email, Microsoft 365.
            
            UNK affiliates are: Nebraska System, University Foundation, Alumni Association, Museum of Nebraska Art, Safety Center, Loper Athletics, UNMC at UNK.
            
            UNK CONTACT DETAILS:
            THE UNIVERSITY OF NEBRASKA AT KEARNEY
            2504 9th Ave, Kearney, NE 68849
            308-865-8441
            
            
            Student organizations and activities: Involved students are successful students. And some of the most important things you'll learn in college are outside of the classroom. Choose from the hundreds of groups and organizations to fill your non-study hours with fun, while building your resume. Here are some of these organizations: 
            •	LPAC
            •	Office for Intercultural Engagement and Leadership
            •	Fraternity & Sorority Life
            •	Student Government
            •	Nebraskan Union
            •	Student Union / Student Engagement
            •	Undergraduate Research
            •	Honors Program
            
            About UNK Cyber Department: The University of Nebraska at Kearney's Cyber Systems Department empowers students to become innovators, leveraging their skills to solve complex technical challenges. Here, you'll receive personalized experiential learning opportunities that allow you to put classroom knowledge into practice in tangible ways. You will also benefit from UNK’s internship program and business partnerships to gain on-the-job experience as you earn your degree.
            
            Under the direction of experienced faculty members, students have created their own VR games, configured enterprise virtualized networks and systems, designed and developed business application software, and even created their own robots.
            Different Program at the cyber department: Cyber Systems has a wide array of programs including Cyber Security Operations, Computer Science, Information Technology, Information Technology and Networking, and Business Intelligence. These programs follow international standard curricula that are continuously updated to incorporate the latest technological advancements, ensuring you'll graduate with a deep understanding of your field.
            
            Cyber department Majors:
            •	Applied Computer Science
            •	Computer Science Comprehensive
            •	Cyber Security Operations Comprehensive
            •	Information Technology and Networking Comprehensive
            •	Information Technology
            •	Business Intelligence Emphasis - Business Administration Comprehensive
            Cyber department Minors: 
            •	Computer Science
            •	Cybersecurity
            •	Data Analytics
            •	Data Science
            •	Information Technology
            •	Information Technology and Networking Minor
            •	Management Information Systems
            •	Software Quality Assurance
            UNK College of Arts and Science: The College of Arts & Sciences is the intellectual foundation of the University of Nebraska at Kearney, offering students a top-notch liberal arts education in the humanities, social sciences and sciences.
            UNK College of Business and Technology: Experiential hands-on learning is a big focus of the College of Business and Technology. Students gain knowledge in the classroom and experience in the field. Here you will find a variety of programs that lead to professional careers in one of the following:  Accounting Agribusiness, Aviation, Business Administration, Business Intelligence, Business, Teacher Education, Construction Management, Computer Science, Cyber Security, Operations, Economics, Finance, Industrial Distribution, Information Networking & Telecommunications, Information Technology, Interior etc.
            
            UNK College of Education: UNK is a leading university for teacher education. Our mission is to prepare, inspire, and support students to become caring, reflective, and competent professionals in a democratic, multicultural society. The technology-rich COE building is home to many outstanding programs.
            
            Fall 2024 Calendar: 
            February 26: Class Schedules available for Fall Semester 2024.
            
            March 26: Fall Semester 2024 academic advising begins.
            April 1-21: Early Registration for Fall Semester 2024
            April 22 - August 25: General Registration for Fall Semester 2024, open to all interested persons admitted to UNK.
            
            July 15: Application for Fall Graduation open through September 15. Apply via MyBLUE.
            August 16: Financial Aid credited to bill.
            
            August 26 - December 20: 2024 Fall Semester
            
            August 30 : Last day for open full-semester course registration and adds: Students adjust their schedules via MyBLUE.
            
            August 30: Last day to drop a full-semester course and receive a 100% refund
            
            August 30: Last day to file a drop to remove a full-semester course from student's record.
            
            August 31: Late Registration begins ($15.00 late registration fee assessed)
            
            August 31 - September 6: Permission from department chairperson required for late registration for full semester courses.
            
             August 31 - November 15: All course withdrawals noted with a grade of "W" on academic record.
            September 2: Labor Day (Student and Staff Holiday - UNK Offices Closed)
            September 5: E-bill notifications will be sent to student's Lopermail account.
            
            September 6: Last day to drop a full-semester course and receive a 75% refund.
            
            September 6: Correction Rosters open.
            
            September 7-20: Permission from instructor and department chairperson required for late registration for full semester courses via Schedule Change form on MyBLUE.
            
            September 13: Last day to withdraw from a full-semester course and receive a 50% refund.
            
            September 13: Correction Rosters close.
            
            September 15: Last day to apply for a degree in December. $25.00 fee due with application. Detailed Graduation Information.
            September 20: Last day to withdraw from a full-semester course and receive a 25% refund.
            
            September 23: Spring 2025 Class Schedule available on MyBLUE.
            
            September 26: Last day to submit Fall 2024 tuition and fees payment without penalty.
            
            October 2: Early-Term Grading for full-semester courses opens.
            
            October 8: Early-Term Grading for full-semester courses closes.
            
            October 16: Mini-session Grading opens.
            
            October 21-22: all Semester Break (Student Holiday - UNK offices open)
            
            October 22: Mini-session Grading closes.
            
            October 23: Academic advising for Spring 2025 registration begins. Students meet with assigned faculty advisors.
            
            October 25: Last day to change a full-semester course registration to or from Credit/No Credit
            
            October 28 - November 17: Early Registration for Spring Semester 2025. Registration Times.
            
            November 15: Last day to withdraw from one or more full-semester courses for the term.
            
            November 18, 2024 - January 1, 2025: General Registration for Spring Semester 2025 (Three-Week Session) via MyBLUE. Available to all interested persons admitted to UNK.
            
            November 18, 2024 - January 20, 2025: General Registration for Spring Semester 2025 (Regular Academic Session) via MyBLUE. Available to all interested persons admitted to UNK.
            
            November 27: Student Holiday (UNK offices open).
            
            November 28-29: Thanksgiving Vacation (UNK offices closed).
            
            December 9-13: Last week of classes.
            
            December 13: Last day of class**
            
            December 16: Final Grading opens.
            
            December 16-19: Fall Semester Final Exams.
            
            December 20: Fall Semester Commencement Ceremony. Detailed Graduation Information.
            
            December 24: Final Grades due by 5:00 PM.
            
            CYBR 460 Virtualizations Essentials is taught by Basheer Qolomany
            Title: Assistant Professor of Cyber Systems
            College: Business and Technology
            Education: Ph.D. and Master of Science in computer science, Western Michigan University, 2018; Master of Science in computer science, University of Mosul, 2011; Bachelor of Science in computer science, University of Mosul, 2008.
            Areas of research/specialization: Intersection of complex systems/networks, metaheuristic, artificial intelligence, machine and deep learning, and its application in support of population health and smart services.
            Courses taught: Cloud Computing, Computer Networking, Programming Languages, Object-Oriented Programming, Interactive Web App. Development, Computer Security, Machine Learning, Cyber Systems Capstone.      
            `
      }, {
        role: "user",
        content: text
      }]
    });

    const botResponse = response.data.choices[0];

    return res.status(200).json({
      success: true,
      data: botResponse,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
