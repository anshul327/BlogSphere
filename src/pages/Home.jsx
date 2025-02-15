import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard, Logo } from '../components';
import { useSelector } from 'react-redux';
import logo from '../components/logo.png';


function Home() {
    const [posts, setPosts] = useState([])

    const authStatus = useSelector((state) => state.auth.status); // Track auth status

    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        } else {
            setPosts([]); // Clear posts when logged out
        }
    }, [authStatus]); // Run effect whenever authStatus changes

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <div className="mb-2 flex justify-center">
                                      <span className="inline-block w-full max-w-[300px]">
                                      <img src={logo} alt="BlogSphere Logo" style={{ width: '300px' }} />
                                      </span>
                                    </div>
                            <h1 className="py-7 text-2xl font-bold">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home