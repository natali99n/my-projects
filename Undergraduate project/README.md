# Identifying different types of CoVid-19 reports using clustering methods


### To run the code
* Environment for working with .ipynb files. Anaconda (Jupiter Nootebook) is recommended
* Python version 3.9.2 or higher

### Libraries
* sklearn
* pandas
* numpy
* nltk
* matploplib
* scikit-image
* wordcloud
* joblib
* seaborn

### Functions
* **red_dataset()** - loading data from the dataset and visualizing correct data markings. Input parameter **dataset_name** - path to the csv file
* **tokenize_and_lemm()** - returns the set of stems for each text from the dataset. The input parameter **text** contains the text of one element of the dataset
* **words_to_tfidf()** - the output is a TF-IDF matrix. for input, the **messeges** parameter is needed, which contains all the texts of the dataset
* **kmeans_model()** - implementation of the K-means algorithm. Parameter **num_clusters** - number of clusters, **tfidf_matrix**, **save_to_pickle** - true or false value according to which we can save the model in pickle and then load it from it
* **top_terms_kmeans()** - visualization of the most common words in the form of WordCloud. Parameter **km** - K-means model, **vizualize_top_terms** - activation of visualization
* **plot_2d_kmeans()** - visualization of clustering results in 2d space. Parameters **xs,ys** - x and y coordinates, **clusters** - labels for clusters, **names** - titles, **save_as_image** - parameter for saving the visualization as an image
* **dbscan_model()** - implementation of the DBSCAN algorithm. The **tfidf_matrix** parameter contains the TF-IDF matrix
* **world_in_cluster()** - visualization of words in each cluster. Parameter **labels_original** - belonging of words to a cluster, **no_clusters** - number of clusters, **vizualize_words_in_cluster** - turning on visualization
* **homogeneity_and_silhouette_score()** - implementation Homogeneity score and Silhouette score, **true_labels** - correct labeling of texts, **tfidf_matrix**, **clusters** - result of clustering (labels)
* **confusion_matrix()** - implementation Confusion matrix. **actual** - correct labeling of texts, **predicted** - result of clustering (labels)

### Installation and launch
* Install **Anaconda Navigator** for Python 3
* Start Anaconda Navigator and select **Jupyter Nodebook**
* A control panel will open in your browser, on which you need to click the **Upload** button and load the project.
* Open the file with code and after starting the project, press the **Run** button on the top panel for each code cell

### Result

![Alt text](/posts/path/to/img.jpg "Optional title")

