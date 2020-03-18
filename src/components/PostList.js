import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Giovanna Silva',
          avatar: '#'
        },
        date: '18 Mar 2020',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.',
        comments: [
          {
            id: 2,
            author: {
              name: 'Paulo Rodrigues',
              avatar: '#'
            },
            date: '18 Mar 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Rodrigo Antonio',
          avatar: '#'
        },
        date: '18 Mar 2020',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Andressa Souza',
              avatar: '#'
            },
            date: '18 Mar 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.'
          },
          {
            id: 5,
            author: {
              name: 'João Da Silva',
              avatar: '#'
            },
            date: '18 Mar 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Lucas Pereira',
          avatar: '#'
        },
        date: '18 Mar 2020',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Isabela Santos',
              avatar: '#'
            },
            date: '18 Mar 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.'
          },
          {
            id: 5,
            author: {
              name: 'Felipe Silveira',
              avatar: '#'
            },
            date: '18 Mar 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magni. Excepturi laboriosam numquam esse, cumque sapiente ex ut cum libero ea in, ipsa nihil qui necessitatibus explicabo quae eum tenetur.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;