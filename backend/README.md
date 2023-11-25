# Expense-Tracker - Backend

## endpoints 

### Authorization and Authentication 
* http://localhost:8000/api/auth/login `post`
* http://localhost:8000/api/auth/register `post`

### User Information Endpoints
* http://localhost:8000/api/accountInfo `get`
> [!IMPORTANT]
> * this endpoint allows users to see their annual income and their overall assets
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/accountInfo `post`
> [!IMPORTANT]
> * this endpoint allows users to change their annual income and their overall assets
> * there are authorization headers needed for this from the jwt token given to the user on sign in

### User Activity enpoints 
* http://localhost:8000/api/activity `get`
> [!IMPORTANT]
> * this endpoint allows users to see their financial activity
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/activity `post`
> [!IMPORTANT]
> * this endpoint allows users to add their assets, liability, and equity, and the current category the activity falls under, and sub categories 
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/activity `put`
> [!IMPORTANT]
> * this endpoint allows users to change and updated certain purchases
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/activity `delete`
> [!IMPORTANT]
> * this endpoint allows users to delete certain purchases
> * there are authorization headers needed for this from the jwt token given to the user on sign in
