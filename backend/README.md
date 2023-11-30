# Expense-Tracker - Backend

## endpoints 

### Authorization and Authentication 
* http://localhost:8000/api/auth/login `post` `user_username user_password`
* http://localhost:8000/api/auth/register `post` `user_username user_password user_info_income user_assets`

### User Information Endpoints
* http://localhost:8000/api/accountInfo `get`
> [!IMPORTANT]
> * this endpoint allows users to see their annual income and their overall assets
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/accountInfo/financial `put`
> [!IMPORTANT]
> * expects `user_info_income` and `user_assets`
> * this endpoint allows users to change their annual income and their overall assets
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/accountInfo/credentials `put`
> [!IMPORTANT]
> * expects `oldPassword, newPassword` as request body
> * this endpoint allows users to change their password
> * there are authorization headers needed for this from the jwt token given to the user on sign in

### User Activity enpoints 
* http://localhost:8000/api/activity `get` `takes query parameters`
* http://localhost:8000/api/activity/categories?filter=Transportation `get` 
built for the filter method on the financial activity 
`takes query parameters`
> [!IMPORTANT]
> * this endpoint allows users to see their financial activity
> * there are authorization headers needed for this from the jwt token given to the user on sign in
* http://localhost:8000/api/activity `post` `added tolerance message`
```
request body 
activity_amount : number
sub_category_name : string
sub_category_id : id
category_name : string
category_id : id
user_username : string
activity_description : string
```
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

### Category endpoint
* need to add category add option 

