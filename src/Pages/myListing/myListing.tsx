/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mylisting.css";
import { Grid, Button, Card, Pagination, Rating } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarIcon from "@mui/icons-material/Star";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Requests from "../../services/Request";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MyListing = () => {
  const requestApiData = new Requests();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const listData = [
    {
      id: 1,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      title: "Chipotle Mexican Grill",
      startFrom: "$220",
      place: "New York, USA",
      rating: 4,
      compare: "Compare to last week",
    },
    {
      id: 2,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings4.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 2.5,
      compare: "Compare to last week",
    },
    {
      id: 3,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      rating: 3,
      compare: "Compare to yesterday",
    },
    {
      id: 4,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 1.5,
      compare: "Compare to last week",
    },
    {
      id: 5,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      rating: 5,
      compare: "Compare to yesterday",
    },
    {
      id: 6,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 4,
      compare: "Compare to last week",
    },

    {
      id: 7,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings4.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 3.5,
      compare: "Compare to last week",
    },
    {
      id: 8,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      rating: 2,
      compare: "Compare to yesterday",
    },
    {
      id: 9,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 4.5,
      compare: "Compare to last week",
    },
    {
      id: 10,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      rating: 5,
      compare: "Compare to yesterday",
    },
    {
      id: 11,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 1,
      compare: "Compare to last week",
    },
    {
      id: 12,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      title: "Chipotle Mexican Grill",
      startFrom: "$220",
      place: "New York, USA",
      rating: 4,
      compare: "Compare to last week",
    },

    {
      id: 13,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      rating: 5,
      compare: "Compare to yesterday",
    },
    {
      id: 14,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 3.5,
      compare: "Compare to last week",
    },
    {
      id: 16,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      title: "Central Shopping Center",
      startFrom: "$300",
      place: "Bangkok, Thailand",
      rating: 4.5,
      compare: "Compare to yesterday",
    },
    {
      id: 17,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      title: "The Beverly Hills Hotel",
      startFrom: "$200",
      place: "Los Angeles, USA",
      rating: 3,
      compare: "Compare to last week",
    },
    {
      id: 18,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      title: "Chipotle Mexican Grill",
      startFrom: "$220",
      place: "New York, USA",
      rating: 5,
      compare: "Compare to last week",
    },
  ];

  const images = [
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings7.jpg",
      label: "image1",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery1.jpg",
      label: "image2",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings4.jpg",
      label: "image3",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/gallery/gallery4.jpg",
      label: "image4",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings5.jpg",
      label: "image5",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings2.jpg",
      label: "image6",
    },
    {
      photo:
        "https://angular.envytheme.com/vesax-ng/assets/img/listings/listings1.jpg",
      label: "image7",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slickNext: true,
    slickPrevious: true,
    swipe: true,
  };

  const itemsPerPage = 3;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [listingData, setListingData] = useState([]);
  const [category, setCategory] = useState<any>([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentListData = listData.slice(indexOfFirstItem, indexOfLastItem);
  const currentListData = listingData.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };

  // console.log(
  //   listingData.map((item: any) => item),
  //   "allCategories"
  // );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const allCategories = await requestApiData.getAllMyListing();
  //       setListingData(allCategories.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // category Api
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const allCategories = await requestApiData.getAllCategory();
  //       setCategory(allCategories.data.data);
  //       // Do something with allCities here
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const getCategory = listingData.map((item: any) => item?.categoryID);
  console.log(category, "category");
  console.log(getCategory, "listingData");
  const uniqueCategoryIds = Array.from(new Set(getCategory));

  const filteredListings = listingData.filter((item: any) => {
    // Assuming `item` has both categoryID and categoryName properties
    const matchingCategory = getCategory.find(
      (categoryId: number) => categoryId === item.categoryID
    );

    // Filter items where the categoryID matches and categoryName is the same
    return (
      matchingCategory && item.categoryName === getCategory[0].categoryName
    );
  });

  console.log(filteredListings, "filtered listings");

  return (
    <div>
      <Grid display="flex" justifyContent="space-between" padding="0 0 20px 0">
        <h3 className="heading">my listing</h3>
        <Button
          variant="outlined"
          sx={{
            color: "#3e98c7",
            fontWeight: "700",
            padding: "5px 5px 5px 0px",
          }}
          onClick={() => navigate("/my-listing/add-listing")}
        >
          <AddOutlinedIcon />
          Add Listing
        </Button>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* {currentListData.map((item: any, index: any) => ( */}
        {listData.map((item: any, index: any) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            {/* {console.log(item, "item")} */}

            <Card className="listing-box ">
              <div style={{ width: "967px" }}>
                <Slider {...settings}>
                  {images.map((itemss: any) => (
                    <div key={itemss.label}>
                      <img
                        src={itemss.photo}
                        alt={itemss.label}
                        style={{
                          // borderRadius: "15px",
                          display: "block",
                          overflow: "hidden",
                          width: "52%",
                        }}
                      />
                    </div>
                  ))}
                  {/* {JSON.parse(item?.bsImages)?.map((image: any, index: any) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{
                          display: "block",
                          overflow: "hidden",
                          width: "52%",
                        }}
                      />
                    </div>
                  ))} */}
                </Slider>
              </div>

              {/* <img
                src={item.img}
                alt="images"
                onClick={() => navigate(`/my-listing/${item.id}`)}
              /> */}
              <Grid padding={2}>
                <div className="d-flex justify-contant-between padding-10">
                  <div className="d-flex align-items-center">
                    <SingleBedIcon className="bookingicon" /> Restaurant
                  </div>
                  <div className="d-flex align-items-center">
                    <RoomIcon className="bookingicon" /> {item.place}
                  </div>
                </div>
                <h2 className="padding-10">{item?.title}</h2>
                <div className="d-flex align-items-center">
                  <BookmarkBorderIcon className="bookingicon" />
                  Open Now
                </div>
                <div className="d-flex justify-contant-between align-items-center padding-10">
                  <div>
                    <Rating
                      name="half-rating"
                      // defaultValue={item.rating}
                      precision={0.5}
                    />
                  </div>
                  <div>Start From: {item.startFrom}</div>
                </div>
              </Grid>
              {/* <Grid
                style={{ borderTop: "1px solid #eeeeee" }}
                className="d-flex justify-contant-between padding20"
              >
                <Button className="default-btn ">Edit</Button>
                <Button className="default-btn ">Delete</Button>
              </Grid> */}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(listingData.length / itemsPerPage)}
        // count={listingData.length / itemsPerPage}
        page={currentPage / itemsPerPage}
        onChange={handlePageChange}
        color="primary"
        className="pagination-list"
      />
    </div>
  );
};

export default MyListing;
