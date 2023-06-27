#include <iostream>
using namespace std;
int main() {
    // Write C++ code here
    int n;
    cin>>n;
    int arr[n];
    
    for(int i=1;i<n;i++)
      cin>>arr[i];
      int mul =1;
    for(auto i : arr){
        mul *=i;
    }
   cout<<mul;

    return 0;
}