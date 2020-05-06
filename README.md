# Sales Jet External App Feature Client API

This simple script has been created to enable easy connection to the Sales Jet External App feature.

To run it just give an id of "salesjetForm" to the form you want to connect with Sales Jet and add first_name, last_name and email as name attributes to the text inputs of the form.

```
<form id="salesjetForm">
    <input type="text" placeholder="FIRST NAME" name="first_name" />
    <input type="text" placeholder="LAST NAME" name="last_name" />
    <input type="text" placeholder="email" name="email" />
    <input type="submit" />
</form>
```

You then call the connectWithSalesJet function and pass the ApiKey and the name of the custom event you are trying to connect to in Sales Jet.

Make sure to call the function after the CDN script is loaded, in order to do that append a custom script tag after the script tag loading the CDN script:

```
<script
    src="https://salesjet-cdn.s3.amazonaws.com/submitFormToSalesJet.js"
    integrity="sha384-PSyBnvTN6eFj4PHoNP/QvlmArh6lIvdUZDfw1JN2GRzJeULGpSvc8kwXAl5N+Yh8"
    crossorigin="anonymous"
></script>
<script>
    connectWithSalesJet(API_KEY, CUSTOM_EVENT, [no-alert]);
</script>
```

In case of success the function returns an object as follows:

```
// SUCCESS OBJECT
{ success: true, error: false, data: response };
```

In case of error the default behavior is just alerting an error has occured, you can override this by passing an optional 'no-alert' as the third parameter to the function if you want to customize error handling.

This is the error object returned in case of error:

```
//ERROR OBJECT
{ succes: false, error: err, data: {} };
```

## GOTCHA

The usual behaviour of the form is prevented by the script so you'll have to programmatically add additional behaviour if you want the form to be also sent to a custom backend.

For more informations on how to create a custom event in Sales Jet, please refer to Sales Jet's Knowledge Base.

If you'd like to contact Sales Jet support just write to supporto@adyproduction.com.

Please check `example.html` for a full implementation.
