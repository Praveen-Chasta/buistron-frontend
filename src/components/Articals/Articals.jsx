import { useState,  } from 'react';
import axios from 'axios';
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import '../../App.css';

function Articals() {

    const [bookmarkedArticles, setBookmarkedArticles] = useState({});
    const API_URL = 'https://buistron-backend-4.onrender.com'

 
    const handleBookmark = async (id) => {
        const article = articles.find((article) => article.id === id);
    
        try {
            if (!bookmarkedArticles[id]) {
       
                await axios.post(`${API_URL}/api/bookmarks`, {
                    articleId: id,
                    title: article.title,
                    content: article.content,
                    author: article.author,
                    email: 'praveen.chastaa@gmail.com', 
                });
                console.log(`Article ${id} bookmarked!`);
    
         
                setBookmarkedArticles((prevState) => ({
                    ...prevState,
                    [id]: true, 
                }));
            } else {
             
                await axios.delete(`${API_URL}/api/bookmarks/${id}`);
                console.log(`Article ${id} removed from bookmarks!`);
    
             
                setBookmarkedArticles((prevState) => ({
                    ...prevState,
                    [id]: false,
                }));
            }
        } catch (error) {
            console.error("Error bookmarking article:", error);
        }
    };
    
    

    const articles = [
        {
            id: 1,
            title: "The Rise of AI in Everyday Life",
            content: "Artificial Intelligence (AI) is transforming how we live, work, and interact with technology. From smart assistants to advanced robotics, AI continues to shape the future.",
            author: "John Doe",
        },
        {
            id: 2,
            title: "Future of Web Development",
            content: "Explore the latest web development trends, including AI-driven design, serverless architecture, and progressive web apps.",
            author: "Jane Smith",
        },
        {
            id: 3,
            title: "The Benefits of Mindful Meditation",
            content: "Mindful meditation has been shown to reduce stress, improve focus, and enhance overall well-being. Learn simple techniques to get started.",
            author: "Alice Johnson",
        },
        {
            id: 4,
            title: "Crypto Guide for Beginners",
            content: "Cryptocurrency is a digital form of money that uses blockchain technology. This guide covers the basics of Bitcoin, Ethereum, and other popular coins.",
            author: "Mark Lee",
        },
        {
            id: 5,
            title: "Traveling on a Budget: Top Tips",
            content: "Discover ways to save money while traveling without sacrificing your experience. From cheap flights to affordable accommodations, we've got you covered.",
            author: "Sophia Brown",
        },
        {
            id: 6,
            title: "The Importance of Cybersecurity",
            content: "In today's digital age, protecting personal and professional data is critical. Learn about the latest cybersecurity practices to stay safe online.",
            author: "David Kim",
        },
    ];

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Latest Articles</h1>
                {articles.map((article) => (
                    <div key={article.id} className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                        <div className='card-section d-flex justify-content-between'>
                            <div className='cards d-flex flex-column justify-content-between p-1'>
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <h5>{article.title}</h5>
                                    <button 
                                        className='button' 
                                        onClick={() => handleBookmark(article.id)}
                                    >
                                        {bookmarkedArticles[article.id] ? (
                                            <FaBookmark size={24} />
                                        ) : (
                                            <FaRegBookmark size={24} />
                                        )}
                                    </button>
                                </div>
                                <p>{article.content}</p>
                                <p><strong>Author : </strong> {article.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Articals;
