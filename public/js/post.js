const addComment = async event => {
  event.preventDefault();

  const comText = document.querySelector('#comment-text').value.trim();
  const postId = document.querySelector('#postId').value.trim();

  if (comText) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comText, postId }),
    });

    if (response.ok) {
      document.location.replace(`/api/comments`);
    } else {
      alert('Failed to add comment');
    }
  }
};

document.querySelector('.comment-form').addEventListener('submit', addComment);
