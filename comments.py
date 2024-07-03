import requests

def fetch_comments(post_id, after=None):
    url = f"https://www.reddit.com/comments/{post_id}.json"
    headers = {'User-Agent': 'fetch-comments-script/0.1'}
    params = {'after': after} if after else {}
    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        print("Error fetching comments")
        return []

    data = response.json()
    comments = []
    
    # Extract comments from the JSON response
    if len(data) > 1 and 'data' in data[1]:
        comments_data = data[1]['data']['children']
        comments.extend([comment['data'] for comment in comments_data])
        after = data[1]['data'].get('after')

    if after:
        comments.extend(fetch_comments(post_id, after=after))

    if not comments:
        print("No comments")
        return []

    return comments

# Example usage:
post_id = "t3_abcdef"  # Replace with the actual post ID
all_comments = fetch_comments(post_id)
print(all_comments)
