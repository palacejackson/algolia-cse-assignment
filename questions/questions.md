*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  


*Answer 2*

Hi Marissa,

Thanks for getting in touch and for sharing your feedback.

I am sorry to hear you are unhappy with the new design of the dashboard. I’ve shared this feedback with our product team, as they’re continuously reviewing customer input while refining the dashboard experience.

In the meantime, there are a few options available for clearing and deleting indices. 

**Dashboard**  
You can follow the steps outlined in our documentation here:  
- [Delete Index](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices#delete-indices-in-the-algolia-dashboard)
- [Clear Index](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices#delete-all-records-from-an-index-in-the-algolia-dashboard)

**API clients** 
- Clear Index using [clearObjects](https://www.algolia.com/doc/libraries/sdk/v1/methods/clear-objects)
- Delete Index using [deleteIndex](https://www.algolia.com/doc/libraries/sdk/v1/methods/delete-index)

**Algolia CLI** 
- Clear Index using [algolia indices clear](https://www.algolia.com/doc/tools/cli/commands/indices/clear)
- Delete Index using [algolia indices delete](https://www.algolia.com/doc/tools/cli/commands/indices/delete)

If you have any questions or encounter any issues, please don't hesitate to reach out.

Best,

Alice
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

*Answer 2*

Hi Carrie,

Thanks for reaching out and sorry to hear you are facing this issue.

In order to investigate further, please can you share the appID of the Algolia application in question? Additionally, please could you give us access to your application by heading over to the [Algolia Support access page](https://www.algolia.com/account/support) and providing us with at least 14 days or more of read access.

Based on the error message you’re seeing (“Record is too big”), it sounds like the record size limit is being reached when customers try and upload a new review. To confirm this, we’ll want to verify that the failing requests correspond to indexing operations where the record exceeds the allowed size. Once access is granted, I can check the logs to confirm whether this is indeed the cause.

For context, Algolia enforces a [max record size of 100KB](https://www.algolia.com/doc/guides/scaling/algolia-service-limits#application,-record,-and-index-limits) to ensure good performance. As a first step, I recommend reducing your record size by restricting users' reviews to only hold information that is necessary for searching, displaying, and ranking and to remove unused attributes. You can find more detailed guidance on this [here](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size).

Should you encounter any issues, I would be able take a look at your records once access has been granted to get an idea of a typical record structure and help advise on which attributes may be appropiate to remove.

Thanks in advance. Let me know if you have any questions.

Best,

Alice


--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

*Answer 3*

Hi Marc,

Thanks for getting in touch. The error message you have shared indicates your site is using Searchkit which is built on top of Elasticsearch, rather than Algolia. As this setup doesn't involve our services, I am undable to directly troubleshoot this for you.

You can find more information on the differences between Algolia and Elasticsearch [here](https://www.algolia.com/competitors/compare-algolia-vs-elasticsearch?utm_ag=rl&utm_model=nonbrand&utm_medium=paid_search&_bm=e&utm_2nd_camp=elstc&_bn=g&gad_source=1&utm_region=emea&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh3f_IT8yf8JulBXDtBq9fWtsADzYOWDPxjnVcK8taLbuYUQJMlY90MaAjJxEALw_wcB&utm_content=algolia_vs_elastic_search&utm_term=algolia+vs+elasticsearch&utm_camp_parent=comp&_bt=474698282379&utm_source=google&utm_campaign=rl_emea_search_nb_competitor_elastic).

If you are planning to use Algolia for search, or are in the process of migrating, I’d be happy to help guide you on how to set up Algolia to implement your desiered search experience and point you to the relevant documentation.

Alternatively, you can explore our documentation [here](https://www.algolia.com/doc/guides/getting-started/what-is-algolia).

If you already have an Algolia application and are having issues, please feel free to share more details along with the appID and I'll' be happy to take a look. I will also add that we do provide an Elasticsearch connector that lets you read data from ElasticSearch and store it in an Algolia index. More information on this can be found [here](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/elasticsearch#page-title).

Let me know if you have any questions.

Best,

Alice

