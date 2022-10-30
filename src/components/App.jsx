import { Component } from 'react'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import axios from "axios";
import Notiflix from 'notiflix';


export class App extends Component {

  state = {
    URL: 'https://pixabay.com/api/',
    KEY: '29488143-fc1f5e1ea256bfdc98e4452e8',
    images: [],
    search: "",
    error: "",
    loading: false,
    page: 1,
    showModal: false,
    modalImage: null,
  }

  fetchPosts = () => {
    const { search, page, URL, KEY } = this.state
    
    axios.get(`${URL}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
    .then(data => {
      const dataArray = [];
      data.map(({ id, webformatURL, largeImageURL }) =>dataArray.push({ id, webformatURL, largeImageURL })
      )
      if (dataArray.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      }
      return dataArray
    }
    )
    .then( (newImages) => {
        this.setState((prevState) => {
          if (prevState.images.length === 0) {
        return {
        images: newImages,
      }
      } else {
        
        return {
          images: [...prevState.images, ...newImages]
        }
      }
      
      })
    })
    .catch(error => {
      this.setState({
        error
      })
    })
      .finally(() => this.setState({
        loading: false,  
      })
      )
  }

  onSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.searchInput.value
    if (searchValue !== "" && searchValue !== this.state.search) {
      this.setState({
      images: [],
      search: searchValue,
      page: 1,
      loading: true,
      
    })
    } else if (searchValue === "") {
      Notiflix.Notify.info('Input is empty!');
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search || this.state.page !== prevState.page) {
      setTimeout(this.fetchPosts, 200) 
    }
  }

  onLoadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
        loading: true,
      }
    })
  }

  render() {
    const {images,loading} = this.state
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {loading && <Loader/>}
        {images.length > 1 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
  
};






















// ===================
// // import React, { Component } from "react";
// import React, { Component } from "react";
// // // import PersonList from "./ImageGallery/ImageGallery";
// import {ImageGallery} from "./ImageGallery/ImageGallery";
// import { Searchbar } from "./Searchbar/Searchbar";

// import {fetchPicture} from './API/Api'
// import Notiflix from 'notiflix';
// import { Button } from "./Button/Button";
// import { Loader } from "./Loader/Loader";


// //  const axios = require('axios').default;
// // const BASE_URL = 'https://pixabay.com/api';
// // const API_KEY = '29488143-fc1f5e1ea256bfdc98e4452e8';





// export class App extends Component {

//   state = {
//     searchImages: "",
//     page: 1,
//     images: [],
//     isLoadingImage: false,
//      error: "",
//   }
  
//    async componentDidUpdate(prevProps, prevState) {
//     if (this.state.searchImages !== prevState.searchImages ) {
//       try {
//         this.setState({ isLoadingImage: true });
//         const images = await fetchPicture(
//           this.state.searchImages,
//           this.state.page

//         );
//         // console.log(images);
//         console.log(images.length);
//         this.setState({ images: images });
//       } catch (error) {
//         // this.setState({ error: error.message });
//         Notiflix.failure('Sorry, wrong request, try reloading the page');
//       } finally {
//         this.setState({ isLoadingImage: false });
//       }
//     }
//     if (this.state.page !== prevState.page) {
//       try {
//         this.setState({ isLoadingImage: true });
//         const images = await fetchPicture(
//           this.state.searchImages,
//           this.state.page
//         );
//         // console.log(response.data.hits);
//         this.setState(prevState => {
//           return { images: [...prevState.images, ...images] };
//         });
//       } catch (error) {
//         // this.setState({ error: error.message });
//         Notiflix.failure('Sorry, wrong request, try reloading the page');
//         console.error(error);
//       } finally {
//         this.setState({ isLoadingImage: false });
//         // this.scrollToButton();
//       }
//     }
//   }
// buildSelectImageList = () => {
//     // console.log(this.state.images);
//     return this.state.images.map(image => ({
//       id: image.id,
//       webformatURL: image.webformatURL,
//       largeImageURL: image.largeImageURL,
//       tags: image.tags,
//     }));
//   };

//     onLoadMore = () => {
//     this.setState((prevState) => {
//       return {
//         page: prevState.page + 1,
//         loading: true,
//       }
//     })
//   }


//   handleForSubmit = (searchImages) => {
//     this.setState({ searchImages });
//   }


//   render() {
//     // console.log(this.state.images);
//     const imageList = this.buildSelectImageList();
//     const { isLoadingImage } = this.state;
//     // const images = this.state;
//     return (
//       <div>

//         <Searchbar onSubmit={this.handleForSubmit} />
//         <ImageGallery imageList={imageList} />
//         <Button onLoadMore={this.onLoadMore} />
//         {/* {images.length > 1 && (<Button onLoadMore={this.onLoadMore} />)} */}
//          {isLoadingImage && <Loader/>}
    
//         {/* <ImageGallery searchImages={this.state.searchImages} /> */}
//     </div>
//     )
//   }
// }


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
    
      
//     </div>
//   );
// };

// ==============================================================================


// import { Component } from 'react';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Button } from './Button/Button';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Searchbar } from './Searchbar/Searchbar';
// import { fetchImages } from './API/Api';
// import { Loader } from './Loader/Loader';
// // import { Modal } from './Modal/Modal';

// export class App extends Component {
//   state = {
//     images: [],
//     error: null,
//     isLoadingImage: false,
//     searchString: '',
//     page: 1,
//   };
//   async componentDidUpdate(prevProps, prevState) {
//     if (this.state.searchString !== prevState.searchString) {
//       try {
//         this.setState({ isLoadingImage: true });
//         const images = await fetchImages(
//           this.state.searchString,
//           this.state.page
//         );
//         // console.log(response.data.hits);
//         this.setState({ images: images });
//       } catch (error) {
//         // this.setState({ error: error.message });
//         Notify.failure('Sorry, wrong request, try reloading the page');
//         console.error(error);
//       } finally {
//         this.setState({ isLoadingImage: false });
//       }
//     }
//     if (this.state.page !== prevState.page) {
//       try {
//         this.setState({ isLoadingImage: true });
//         const images = await fetchImages(
//           this.state.searchString,
//           this.state.page
//         );
//         // console.log(response.data.hits);
//         this.setState(prevState => {
//           return { images: [...prevState.images, ...images] };
//         });
//       } catch (error) {
//         // this.setState({ error: error.message });
//         Notify.failure('Sorry, wrong request, try reloading the page');
//         console.error(error);
//       } finally {
//         this.setState({ isLoadingImage: false });
//         // this.scrollToButton();
//       }
//     }
//   }

//   buildSelectImageList = () => {
//     console.log(this.state.images);
//     return this.state.images.map(image => ({
//       id: image.id,
//       webformatURL: image.webformatURL,
//       largeImageURL: image.largeImageURL,
//       tags: image.tags,
//     }));
//   };

//   handleFormSubmit = searchNameImages => {
//     this.setState({ searchString: searchNameImages, page: 1 });
//     console.log(searchNameImages);
//   };

//   changePageNumber = () => {
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });

//     console.log(this.state.page);
//     // this.setState({ page: pageNumber + 1 });
//   };

//   // scrollToButton = () => {
//   //   console.log(this.load);
//   //   this.load.scrollIntoView({ behavior: 'smooth' });
//   // };

//   render() {
//     console.log(this.state);
//     const { isLoadingImage } = this.state;
//     const imageList = this.buildSelectImageList();
//     return (
//       <div
//         style={{
//           flexDirection: 'column',
//           display: 'flex',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {isLoadingImage && <Loader />}
//         {!isLoadingImage && this.state.images.length > 0 && (
//           <>
//             <ImageGallery imageList={imageList} />
            
//             <Button
//               changePage={this.changePageNumber}
//               ref={load => {
//                 this.load = load;
//               }}
//             />
//           </>
//         )}
//       </div>
//     );
//   }
// }