const editPost = async event => {
  event.preventDefault();

  const id = document.querySelector('#delete').value.trim();
  const postTitle = document.querySelector('#post-title').value.trim();
  const postText = document.querySelector('#post-text').value.trim();

  if (postTitle && postText) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ postTitle, postText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }
  }
};

const deletePost = async () => {
  const id = document.querySelector('#delete').value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete post');
  }
};

document.querySelector('.edit-post-form').addEventListener('submit', editPost);

document.querySelector('#delete').addEventListener('click', deletePost);
